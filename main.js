import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsBB8eCNAKUmWzjEDXC1DRX1n9SMoFc3U",
  authDomain: "meals-c5c34.firebaseapp.com",
  projectId: "meals-c5c34",
  storageBucket: "meals-c5c34.appspot.com",
  messagingSenderId: "362647737057",
  appId: "1:362647737057:web:ac49f8e60f26bf0ac7dda0",
  measurementId: "G-DGKJEGLCHN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const mealsList = document.getElementById("meals-list");

async function loadMeals() {
  try {
    const mealsCol = collection(db, "meals");
    const mealSnapshot = await getDocs(mealsCol);
    if (mealSnapshot.empty) {
      mealsList.innerHTML = "<li>لا توجد وجبات حالياً.</li>";
      return;
    }
    mealSnapshot.forEach((doc) => {
      const meal = doc.data();
      const li = document.createElement("li");
      li.textContent = `${meal.name} — السعر: ${meal.price} — الوصف: ${meal.description || "لا يوجد وصف"}`;
      mealsList.appendChild(li);
    });
  } catch (error) {
    mealsList.innerHTML = `<li>حدث خطأ أثناء تحميل الوجبات: ${error.message}</li>`;
  }
}

loadMeals();
