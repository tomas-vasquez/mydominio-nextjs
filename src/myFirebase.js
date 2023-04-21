//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase.config";

//store
import store from "./store";
import { setCurrentUser } from "./store/setting_store/actions";

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  var user = firebase.auth().currentUser;
  store.dispatch(setCurrentUser(user));
});

export default firebase;
