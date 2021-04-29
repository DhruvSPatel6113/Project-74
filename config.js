import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCUGLFvi9dzjKtYxzH5EW1WTpT-u79mwsQ",
  authDomain: "project-71-4d816.firebaseapp.com",
  projectId: "project-71-4d816",
  storageBucket: "project-71-4d816.appspot.com",
  messagingSenderId: "406971653659",
  appId: "1:406971653659:web:7fc4d455a9fdf6664da2be"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();