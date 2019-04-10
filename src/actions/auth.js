import { firebase } from "../firebase/firebase";

export const startCreateUser = (email, pass) => dispatch => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(response => {
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
      return dispatch(login(response.user.uid));
    })
    .catch(error => console.log(error));
};

export const login = uid => ({
  type: "LOGIN",
  uid
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
