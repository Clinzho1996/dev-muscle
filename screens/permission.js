/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import {PermissionsAndroid, Platform} from 'react-native';

export const androidCameraPermission = async () => {
  try {
    if (Platform.OS === 'android' && Platform.Version > 22) {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      ]);
      console.log(granted, 'granted response');
      if (
        granted['android.permission.CAMERA'] !== 'granted' ||
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
        granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted' ||
        granted['android.permission.READ_MEDIA_IMAGES'] !== 'granted'
      ) {
        console.log("Don't have required permission. Please allow permissions");
        return false;
      }
      return true;
    }
    return true;
  } catch (error) {
    console.error('Permission Error:', error);
    return false;
  }
};
