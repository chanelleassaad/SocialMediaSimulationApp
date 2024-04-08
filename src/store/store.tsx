import {configureStore} from '@reduxjs/toolkit';
import PostsReducer from './posts/PostsReducer';

const store = configureStore({
  reducer: {
    posts: PostsReducer,
  },
});

export default store;
