import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyAMUZ4okCpCQpP9n6dWUE8q9VyNv3LITho",
  authDomain: "chat2-9054c.firebaseapp.com",
  projectId: "chat2-9054c",
  storageBucket: "chat2-9054c.appspot.com",
  messagingSenderId: "724922373133",
  appId: "1:724922373133:web:0c8e6076239927cf627144",
  measurementId: "G-76EMGBWH0Q"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;
