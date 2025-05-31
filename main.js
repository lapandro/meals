import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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

const mealsList = document.getElementById("mealsList");

async function loadMeals() {
  const mealsCol = collection(db, "meals");
  const mealSnapshot = await getDocs(mealsCol);
  mealSnapshot.forEach((doc) => {
    const meal = doc.data();
    const li = document.createElement("li");
    li.textContent = meal.name + (meal.description ? ` - ${meal.description}` : "");
    mealsList.appendChild(li);
  });
}

loadMeals();
