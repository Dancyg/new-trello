export const commonInitialState = {
  locale: 'en',
};

export const notificationsInitialState = {
  open: false,
  message: '',
  key: new Date().getTime(),
  vertical: 'top',
  horizontal: 'right',
  autoHideDuration: 4500,
  status: 'error',
};