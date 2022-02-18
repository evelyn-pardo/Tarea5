// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc, onSnapshot,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOFdqcM8TjBELEEDqQqVkhga7TFBxpISA",
  authDomain: "tarea5-javascript.firebaseapp.com",
  projectId: "tarea5-javascript",
  storageBucket: "tarea5-javascript.appspot.com",
  messagingSenderId: "916221073212",
  appId: "1:916221073212:web:91fd77578ff989ca35f039",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) =>
  addDoc(collection(db,'task'), {title, description});

export const getTasks = () => getDocs(collection(db, 'task'));

export const onGetTask = (callback) =>
  onSnapshot(collection(db,'task'), callback);

export const deleteTask = (id )=> deleteDoc(doc(db, 'task', id));

export const getTask = (id) => getDoc(doc(db, 'task', id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, 'task', id), newFields);