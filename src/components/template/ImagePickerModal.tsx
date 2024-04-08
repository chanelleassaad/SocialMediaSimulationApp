import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  PhotoIdentifier,
  CameraRoll,
} from '@react-native-camera-roll/camera-roll';

interface ImagePickerModalProps {
  visible: boolean;
  onSelectImage: (imageUri: string) => void;
  onClose: () => void;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  visible,
  onSelectImage,
  onClose,
}) => {
  const [photos, setPhotos] = useState<PhotoIdentifier[]>([]);

  useEffect(() => {
    if (visible) {
      getPhotos();
    }
  }, [visible]);

  const getPhotos = async () => {
    try {
      const {edges} = await CameraRoll.getPhotos({
        first: 50,
        assetType: 'Photos',
      });
      if (edges.length > 0) {
        setPhotos(edges.map(edge => edge.node));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}: {item: PhotoIdentifier}) => {
    return (
      <TouchableOpacity
        onPress={() => onSelectImage(item.image.uri)}
        style={styles.imageContainer}>
        <Image source={{uri: item.image.uri}} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Button title="Close" onPress={onClose} />
        <FlatList
          data={photos}
          renderItem={renderItem}
          keyExtractor={item => item.image.uri}
          numColumns={3}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: 70,
  },
  listContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    margin: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ImagePickerModal;
