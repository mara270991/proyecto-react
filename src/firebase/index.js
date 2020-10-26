
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDjlGY3omjXeD2srH1-eFFMm2n6QBUYQaw",
   authDomain: "my-shop-1e69a.firebaseapp.com",
   databaseURL: "https://my-shop-1e69a.firebaseio.com",
   projectId: "my-shop-1e69a",
   storageBucket: "my-shop-1e69a.appspot.com",
   messagingSenderId: "200890348395",
   appId: "1:200890348395:web:c639e1c2fa31817dd3522e"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
