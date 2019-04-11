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
      return {
        ...state,
        loggedIn: false,
        error: action.error
      };

    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        uid: action.uid,
        username: action.username,
        profile: action.profile
      };
    case "LOGOUT":
      return {};
    case "ADD_PROFILE":
      return {
        ...state,
        profile: action.profile
      };
    case "GET_PROFILE":
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};
