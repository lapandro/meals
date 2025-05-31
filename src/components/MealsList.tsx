import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

export default function MealsList() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const snapshot = await getDocs(collection(db, "meals"));
      const mealsData: Meal[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Meal));
      setMeals(mealsData);
      setLoading(false);
    };
    fetchMeals();
  }, []);

  if (loading) return <p>جار التحميل...</p>;

  return (
    <div>
      <h2>قائمة الوجبات</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.id}>
            <strong>{meal.name}</strong> - {meal.description} - السعر: {meal.price} ريال
          </li>
        ))}
      </ul>
    </div>
  );
}
