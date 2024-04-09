import {Dispatch} from 'react';
import {
  addPost,
  getPostsFailure,
  getPostsStart,
  getPostsSuccess,
  deletePostFromStore,
} from '../store/posts/PostsReducer';
import {api} from './UserApi';

interface IPost {
  id: string;
  imageUrl: string;
  imageCaption: string;
  userId: string;
}

export const getPosts = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(getPostsStart());
    const response = await api.get('/posts');
    dispatch(getPostsSuccess(response.data));
  } catch (error) {
    dispatch(getPostsFailure(error.message));
  }
};

export const getPostsByUserId = async (userId: string): Promise<IPost[]> => {
  try {
    const response = await api.get<IPost[]>(`/posts?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (
  dispatch: Dispatch<any>,
  imageUrl: string,
  imageCaption: string,
  userId: string,
  username: string,
): Promise<IPost> => {
  try {
    const post = {
      imageUrl: imageUrl,
      imageCaption: imageCaption,
      userId: userId,
      username: username,
    };
    const response = await api.post<IPost>('/posts', post);
    dispatch(addPost(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deletePost = async (
  dispatch: Dispatch<any>,
  postId: string,
): Promise<IPost> => {
  try {
    const response = await api.delete<IPost>(`/posts/${postId}`);
    dispatch(deletePostFromStore(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
