import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD4xXeM7K_tKHHJBjIkOPskZ6Wc7ocFOSU",
  authDomain: "group-4-web.firebaseapp.com",
  projectId: "group-4-web",
  storageBucket: "group-4-web.appspot.com",
  messagingSenderId: "26120383437",
  appId: "1:26120383437:web:fca63b929b1884be547284",
  measurementId: "G-N1254VF5Q2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
