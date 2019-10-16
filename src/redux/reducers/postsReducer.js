import Axios from "axios";

// Initial state
const initialState = {
  posts: [],
  post: {},
  loading: false
};

// Consts
const GET_ALL_POSTS = "GET_ALL_POSTS";
const GET_POSTS_BY_TITLE = "GET_POSTS_BY_TITLE";
const GET_POST_BY_ID = "GET_POST_BY_ID";
const CLEAR_POST = "CLEAR_POST";
// const ADD_POST = "ADD_POST";

// Action creators
export function getAllPosts() {
  return {
    type: GET_ALL_POSTS,
    payload: Axios.get(`/api/posts`)
  };
}

export function searchPosts(searchTitle) {
  return {
    type: GET_POSTS_BY_TITLE,
    payload: Axios.get(`/api/posts/userposts?title=${searchTitle}`)
  };
}

export function getPost(post_id) {
  return {
    type: GET_POST_BY_ID,
    payload: Axios.get(`/api/post/${post_id}`)
  };
}

export function clearPost() {
  return {
    type: CLEAR_POST
  };
}

// Reducer
export default function reducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case `${GET_ALL_POSTS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ALL_POSTS}_FULFILLED`:
      return {
        ...state,
        posts: payload.data
      };
    case `${GET_POSTS_BY_TITLE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_POSTS_BY_TITLE}_FULFILLED`:
      return {
        ...state,
        posts: payload.data
      };
    case `${GET_POST_BY_ID}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_POST_BY_ID}_FULFILLED`:
      return {
        ...state,
        post: payload.data
      };
    case CLEAR_POST:
      return {
        ...state,
        post: {}
      }
    default:
      return state;
  }
}
