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

async function fetchMeals() {
  const mealsList = document.getElementById("meals-list");
  const querySnapshot = await getDocs(collection(db, "meals"));
  querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = doc.data().name;
    mealsList.appendChild(li);
  });
}

fetchMeals();
