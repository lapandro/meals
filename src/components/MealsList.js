import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'meals'));
        const mealsData = [];
        querySnapshot.forEach((doc) => {
          mealsData.push({ id: doc.id, ...doc.data() });
        });
        setMeals(mealsData);
      } catch (error) {
        console.error('حدث خطأ أثناء جلب البيانات:', error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div style={{ padding: '16px' }}>
      <h2>قائمة الوجبات</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id} style={{ marginBottom: '12px' }}>
            <strong>{meal.name}</strong><br />
            <span>{meal.description}</span><br />
            <span>السعر: {meal.price} ريال</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
