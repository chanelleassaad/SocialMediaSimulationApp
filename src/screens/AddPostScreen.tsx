import React, {useState} from 'react';
import {View, StyleSheet, Platform, Button, Alert} from 'react-native';
import {requestCameraPermission} from '../permissions/AndroidCameraRollPermission';
import ImagePickerModal from '../components/template/ImagePickerModal';
import CaptionInput from '../components/molecules/CaptionInput';
import ImageInput from '../components/molecules/ImageInput';
import {useDispatch} from 'react-redux';
import {createPost} from '../config/PostsApi';
import {useAuth} from '../store/authentication/AuthContext';

const AddPostScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {userToken} = useAuth();
  const dispatch = useDispatch();

  const pickImage = async () => {
    if (Platform.OS === 'android') {
      const permissionGranted = await requestCameraPermission();
      if (!permissionGranted) {
        return;
      }
    }
    setModalVisible(true);
  };

  const handleSelectImage = (imageUri: string) => {
    setImage(imageUri);
    setModalVisible(false);
  };

  const handleCancelImage = () => {
    setImage(null);
    setCaption('');
  };

  const handleAddPost = async () => {
    try {
      await createPost(
        dispatch,
        image,
        caption,
        userToken.id,
        userToken.username,
      );
      Alert.alert('Post Added', 'Your post has been successfully added.');
      handleCancelImage();
    } catch (error) {
      Alert.alert('Error', 'Failed to add your post. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <ImageInput image={image} handleCancelImage={handleCancelImage} />
      <CaptionInput
        caption={caption}
        setCaption={setCaption}
        handlePost={handleAddPost}
        disabled={!image || !caption}
      />
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
