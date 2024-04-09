import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import PostItem from '../molecules/PostItem';

const PostsList = ({posts}) => {
  const renderItem = useCallback(({item}) => {
    return <PostItem item={item} />;
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      initialNumToRender={4}
      maxToRenderPerBatch={2}
      renderItem={renderItem}
    />
  );
};

export default PostsList;
