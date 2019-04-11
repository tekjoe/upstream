import { firebase } from "../firebase/firebase";
import database from "../firebase/firebase";

export const startCreateUser = (email, pass, username) => dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(response => {
      firebase.auth().currentUser.updateProfile({ displayName: username });
      return dispatch(createUserSuccess(response));
    })
    .catch(error => dispatch(createUserFail(error)));
};

export const createUserSuccess = response => {
  return {
    type: "CREATE_USER_SUCCESS",
    user: response.user
  };
};

export const createUserFail = error => {
  return {
    type: "CREATE_USER_FAIL",
    error
  };
};

export const startLogin = (email, pass) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then(response => {
      console.log(response);
      return dispatch(login(response.user.uid, response.user.displayName));
    })
    .catch(error => console.log(error));
};

export const login = (uid, username) => ({
  type: "LOGIN",
  uid,
  username
});

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      return dispatch(logout());
    })
    .catch(err => console.log(err));
};

export const addProfile = profile => ({
  type: "ADD_PROFILE",
  profile
});

export const startAddProfile = (profileData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { about, twitchUsername, twitterUsername } = profileData;
    const profile = { about, twitchUsername, twitterUsername };
    return database
      .ref(`users/${uid}/profile`)
      .set(profile)
      .then(() => {
        dispatch(addProfile(profile));
      });
  };
};

export const getProfile = profile => ({
  type: "GET_PROFILE",
  profile
});

export const startGetProfile = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/profile`)
      .once("value")
      .then(snapshot => {
        dispatch(getProfile(snapshot.val()));
      });
  };
};
