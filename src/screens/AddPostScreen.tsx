import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import ImagePickerModal from '../components/template/ImagePickerModal';
import CaptionInput from '../components/molecules/CaptionInput';
import ImageInput from '../components/molecules/ImageInput';
import {useDispatch} from 'react-redux';
import {createPost} from '../config/PostsApi';
import {useAuth} from '../store/authentication/AuthContext';
import notifee from '@notifee/react-native';
import {requestImagePickerPermission} from '../permissions/Permissions';

const AddPostScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {userToken} = useAuth();
  const dispatch = useDispatch();

  const pickImage = useCallback(async () => {
    const permissionGranted = await requestImagePickerPermission();
    if (!permissionGranted) {
      return;
    }
    setModalVisible(true);
  }, []);

  const handleSelectImage = useCallback((imageUri: string) => {
    setImage(imageUri);
    setModalVisible(false);
  }, []);

  const handleCancelImage = useCallback(() => {
    setImage(null);
    setCaption('');
  }, []);

  const handleAddPost = async () => {
    try {
      await createPost(
        dispatch,
        image,
        caption,
        userToken.id,
        userToken.username,
      );
      displayNotification(
        'Post Added',
        'Your post has been successfully added!',
      );
      handleCancelImage();
    } catch (error) {
      displayNotification(
        'Error',
        'Failed to add your post. Please try again.',
      );
    }
  };

  const displayNotification = async (title: string, body: string) => {
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    await notifee.displayNotification({
      title,
      body,
      android: {channelId, pressAction: {id: 'default'}},
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <>
          <ImageInput image={image} handleCancelImage={handleCancelImage} />
          <CaptionInput
            caption={caption}
            setCaption={setCaption}
            handlePost={handleAddPost}
            disabled={!image || !caption}
          />
        </>
      )}

      <ImagePickerModal
        visible={modalVisible}
        onSelectImage={handleSelectImage}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
});

export default AddPostScreen;
