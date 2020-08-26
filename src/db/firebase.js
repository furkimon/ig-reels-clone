import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB4ppsWul_5TxMfzXjYYuUz9Ask32lfUsk",
    authDomain: "reels-clone-2f4cf.firebaseapp.com",
    databaseURL: "https://reels-clone-2f4cf.firebaseio.com",
    projectId: "reels-clone-2f4cf",
    storageBucket: "reels-clone-2f4cf.appspot.com",
    messagingSenderId: "132254332377",
    appId: "1:132254332377:web:0e5e4cce9a2a8626c1d5c8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;