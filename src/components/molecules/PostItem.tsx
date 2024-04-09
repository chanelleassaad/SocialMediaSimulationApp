import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useAuth} from '../../store/authentication/AuthContext';
import {useDispatch} from 'react-redux';
import {deletePost} from '../../config/PostsApi';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons

const PostItem = ({item}) => {
  const {userToken} = useAuth();
  const [canDelete, setCanDelete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (item.userId === userToken.id) {
      setCanDelete(true);
    }
  }, [item, userToken]);

  const handleDelete = async () => {
    Alert.alert(
      'Delete Post',
      'Are you sure you want to delete this post?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          onPress: async () => await deletePost(dispatch, item.id),
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Text style={styles.username}>{item.username}</Text>
        {canDelete && (
          <TouchableOpacity onPress={handleDelete}>
            <Icon name="close" size={20} color="red" />
          </TouchableOpacity>
        )}
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
    alignItems: 'center',
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
