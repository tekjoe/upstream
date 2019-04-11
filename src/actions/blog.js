import database from "../firebase/firebase";

// an action creator that performs an ansynchronous dispatch
export const startAddBlog = (blogData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { title = "", content = "" } = blogData;
    const blog = {
      title,
      content
    };
    database
      .ref(`users/${uid}/blogs`)
      .push(blog)
      .then(ref => {
        dispatch(addBlog({ id: ref.key, ...blog }));
      });
  };
};

export const addBlog = blog => ({
  type: "ADD_BLOG",
  blog
});

export const getBlogs = blogs => ({
  type: "GET_BLOGS",
  blogs
});

export const startGetBlogs = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/blogs`)
      .once("value")
      .then(snapshot => {
        const blogs = [];
        snapshot.forEach(childSnapshot => {
          blogs.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(getBlogs(blogs));
      });
  };
};
