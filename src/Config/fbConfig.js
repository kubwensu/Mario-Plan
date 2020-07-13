import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDP9D-fKYJ5jVRRNJrK6u1EH4dfvg-fKdI",
  authDomain: "mario-plan-bwense.firebaseapp.com",
  databaseURL: "https://mario-plan-bwense.firebaseio.com",
  projectId: "mario-plan-bwense",
  storageBucket: "mario-plan-bwense.appspot.com",
  messagingSenderId: "578077002927",
  appId: "1:578077002927:web:94b95e603cc20147cfd85a",
  measurementId: "G-HMFQP1EF89",
};
// Initialize Firebase
 const fbConfig = firebase.initializeApp(firebaseConfig);
firebase.analytics();
fbConfig.firestore();

export default firebase;
