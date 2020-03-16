export const getPosts = () => ({
  type: "GET_POSTS"
});

export const deletePost = id => ({
  type: "DELETE_POST",
  id
});

export const createPost = data => ({
  type: "NEW_POST",
  data
});
