const colors = {
  black: '#000000',
  white: '#ffffff',
  grey_0: '#ffffff',
  grey_1: '#a6a6a6',
  red: '#e84118',
  blue: '#3679fe',
};

export const theme = {
  background: colors.white,
  text: colors.black,
  errorText: colors.red,

  // Image Component
  imageBackground: colors.grey_0,
  imageButtonBackground: colors.grey_1,
  imageButtonIcon: colors.white,

  // Input Component
  label: colors.grey_1,
  inputPlaceholder: colors.grey_1,
  inputBorder: colors.grey_1,
  inputDisabledBackground: colors.grey_0,

  // Button Component
  buttonBackground: colors.blue,
  buttonTitle: colors.white,
  buttonUnfilledTitle: colors.blue,
  buttonLogout: colors.blue,

  // Navigation
  headerTintColor: colors.black,
  tabActiveColor: colors.black,
  tabInactiveColor: colors.black,

  // Spinner
  spinnerBackground: colors.black,
  spinnerIndicator: colors.white,

  // List
  listBorder: colors.grey_0,
  listTime: colors.grey_1,
  listDescription: colors.grey_1,
  listIcon: colors.black,

  // GiftedChat
  sendButtonActivate: colors.blue,
  sendButtonInactivate: colors.grey_1,
};
