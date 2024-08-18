import Toast from 'react-native-toast-message';

export const showToast = (type, title, message) => {
  Toast.show({
    type: type,
    position: 'top',
    text1: title,
    text2: message,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
  });
};