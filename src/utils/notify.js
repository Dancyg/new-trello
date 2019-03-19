import { A } from '../index';
/**
 * Notifications. Statuses: enum [default, info, success, warning, error]
 * @param message
 * @param status
 * @param autoHideDuration
 */
export const notify = ({
  message,
  status = 'error', // enum [info, success, warning, error]
  autoHideDuration = 6000,
  vertical = 'top',
  horizontal = 'right',
}) =>
  A.dispatchNotifications({
    key: new Date().getTime(),
    message,
    status,
    autoHideDuration,
    vertical,
    horizontal,
  });
