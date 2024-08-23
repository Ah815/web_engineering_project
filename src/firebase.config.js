// import { getApp, getApps, initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
//   authDomain: "restaurantapp-c2ed6.firebaseapp.com",
//   databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
//   projectId: "restaurantapp-c2ed6",
//   storageBucket: "restaurantapp-c2ed6.appspot.com",
//   messagingSenderId: "174416156605",
//   appId: "1:174416156605:web:2ec169ea4ef3e7bb25e4d4",
// };

// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// const firestore = getFirestore(app);
// const storage = getStorage(app);

// export { app, firestore, storage };


// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF_c8LEBvvrlkXpz6MWktqBdMFOusKTsE",
  authDomain: "food-ordering-3599a.firebaseapp.com",
  projectId: "food-ordering-3599a",
  storageBucket: "food-ordering-3599a.appspot.com",
  messagingSenderId: "311992409910",
  appId: "1:311992409910:web:8ed86937261d6c26779d97"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
