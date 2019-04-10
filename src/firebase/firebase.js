import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBk3G5LAkGlopFjOttIaMr9t40FogBGT04",
  authDomain: "stream-connector.firebaseapp.com",
  databaseURL: "https://stream-connector.firebaseio.com",
  projectId: "stream-connector",
  storageBucket: "stream-connector.appspot.com",
  messagingSenderId: "652293291841"
};

firebase.initializeApp(config);

const database = firebase.database();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();

export { firebase, emailAuthProvider, database as default };
