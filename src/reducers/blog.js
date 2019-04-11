const blogsReducerDefaultState = [];

export default (state = blogsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "GET_BLOGS":
      return action.blogs;
    default:
      return state;
  }
};
