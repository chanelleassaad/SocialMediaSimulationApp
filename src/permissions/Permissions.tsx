import {Platform} from 'react-native';
import {requestCameraPermission} from './AndroidCameraRollPermission';

export const requestImagePickerPermission = async () => {
  if (Platform.OS === 'android') {
    const permissionGranted = await requestCameraPermission();
    if (!permissionGranted) {
      return false;
    }
  }
  return true;
};
