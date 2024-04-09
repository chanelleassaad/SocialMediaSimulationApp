import React, {memo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const PostItem = ({item}) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
      </View>
      <View style={styles.captionContainer}>
        <Text>{item.imageCaption}</Text>
      </View>
    </View>
  );
};

export default memo(PostItem);

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  captionContainer: {
    paddingHorizontal: 10,
  },
});
