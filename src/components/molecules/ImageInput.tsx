import React from 'react';
import {View, Image, Button, StyleSheet} from 'react-native';

interface ImagePickerProps {
  image: string;
  handleCancelImage: () => void;
}

const ImageInput = ({image, handleCancelImage}: ImagePickerProps) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} />
      <Button title="Cancel" onPress={handleCancelImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default ImageInput;
