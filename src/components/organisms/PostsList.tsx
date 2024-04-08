import React from 'react';
import {FlatList} from 'react-native';
import PostItem from '../molecules/PostItem';

const PostsList = ({posts}) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => <PostItem item={item} />}
    />
  );
};

export default PostsList;
