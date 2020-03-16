const initialState = {
  posts: [],
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "POSTS_RECEIVED":
      return { ...state, posts: action.payload };
    case "POST_DELETED":
      let deleteArray = [...state.posts];
      const { id } = action;
      deleteArray = deleteArray.filter(post => post.id !== id);
      return {
        ...state,
        posts: deleteArray
      };
    case "POST_CREATED":
      const newArray = [...state.posts];
      newArray.unshift(action.payload);
      return {
        ...state,
        posts: newArray
      };
    case "TODO_RECEIVED":
      return { ...state, todos: action.payload };
    default:
      return state;
  }
}
