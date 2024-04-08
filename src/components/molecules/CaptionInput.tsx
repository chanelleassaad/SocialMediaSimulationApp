import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

interface CaptionInputProps {
  caption: string;
  setCaption: React.Dispatch<React.SetStateAction<string>>;
  handlePost: () => void;
  disabled: boolean;
}

const CaptionInput = ({
  caption,
  setCaption,
  handlePost,
  disabled,
}: CaptionInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter caption..."
        value={caption}
        onChangeText={text => setCaption(text)}
        style={styles.input}
      />
      <Button title="Post" onPress={handlePost} disabled={disabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default CaptionInput;
