import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCBGDIj-m3ut5WZWA26PxsPj45JVxZ4hnc",
  authDomain: "noteworthy-d48cc.firebaseapp.com",
  databaseURL: "https://noteworthy-d48cc.firebaseio.com",
  projectId: "noteworthy-d48cc",
  storageBucket: "noteworthy-d48cc.appspot.com",
  messagingSenderId: "136490809967"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 