import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyB5dCMkGtlg9sE40hr24Zi6tuemeBSwNvU",
    authDomain: "react-todo-e1351.firebaseapp.com",
    databaseURL: "https://react-todo-e1351.firebaseio.com",
    projectId: "react-todo-e1351",
    storageBucket: "react-todo-e1351.appspot.com",
    messagingSenderId: "962273198471",
    appId: "1:962273198471:web:f1757556b5241f289bd322"
});
  
const db = firebase.firestore();

export { db };