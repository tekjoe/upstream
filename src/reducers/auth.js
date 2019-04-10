export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_USER_SUCCESS":
      const {
        user: { uid: userId }
      } = action;
      return {
        ...state,
        loggedIn: true,
        userId
      };
    case "CREATE_USER_FAIL":
      const { error } = action;
      return {
        ...state,
        loggedIn: false,
        error
      };
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        uid: action.uid
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
