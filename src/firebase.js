import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAx5Qo352JzEIZARQebRIQIPU1ImtYnqlA",
  authDomain: "todo-app-7de1e.firebaseapp.com",
  databaseURL: "https://todo-app-7de1e.firebaseio.com",
  projectId: "todo-app-7de1e",
  storageBucket: "todo-app-7de1e.appspot.com",
  messagingSenderId: "113707130651",
  appId: "1:113707130651:web:692db407d018b485683dbe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
