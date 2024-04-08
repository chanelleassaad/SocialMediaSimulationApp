import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import PostsList from '../components/organisms/PostsList';
import ProfileHeader from '../components/organisms/ProfileHeader';
import {getPosts} from '../config/PostsApi';
import {useAuth} from '../store/authentication/AuthContext';

const ProfileScreen = () => {
  const {userToken} = useAuth();
  const {posts} = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!posts.length) {
      dispatch(getPosts());
    }
  }, [dispatch, posts.length]);

  const userPosts = posts.filter(post => post.userId === userToken.id);

  return (
    <View style={styles.container}>
      <ProfileHeader />
      {userPosts.length === 0 && (
        <View style={styles.noPostsContainer}>
          <Text style={styles.noPostsText}>No Posts Yet</Text>
        </View>
      )}
      {userPosts.length > 0 && <PostsList posts={userPosts} />}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  noPostsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noPostsText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
  },
});
