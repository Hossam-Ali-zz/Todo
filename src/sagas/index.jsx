import { put, takeEvery, all, fork } from "redux-saga/effects";
import { BASE } from "../apis";

function* postsWatcher() {
  yield takeEvery("GET_POSTS", fetchPosts);
  yield takeEvery("NEW_POST", createPost);
  yield takeEvery("DELETE_POST", deletePost);
  yield takeEvery("GET_TODOS", fetchTodo);
}

function* fetchPosts() {
  const { data } = yield BASE.get("/posts");
  yield put({ type: "POSTS_RECEIVED", payload: data });
}

function* createPost({ data }) {
  const response = yield BASE.post("/posts", data);
  yield put({ type: "POST_CREATED", payload: response.data });
}

function* deletePost({ id }) {
  const { data } = yield BASE.delete(`/posts/${id}`);
  yield put({ type: "POST_DELETED", payload: data, id });
}

function* fetchTodo() {
  const { data } = yield BASE.get("/todos");
  yield put({ type: "TODO_RECEIVED", payload: data });
}

export default function* rootSaga() {
  yield all([fork(postsWatcher)]);
}
