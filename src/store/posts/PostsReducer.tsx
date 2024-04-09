import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePostFromStore: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload.id);
    },
    getPostsStart: state => {
      state.loading = true;
      state.error = null;
    },
    getPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    getPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addPost,
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
  deletePostFromStore,
} = postsSlice.actions;

export default postsSlice.reducer;
