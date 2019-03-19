import { constants } from '../config/constants';
import {
  commonInitialState,
  notificationsInitialState
} from './initialStates';


export const reducers = [
  {
    name: 'common',
    basicType: constants.COMMON,
    initialState: commonInitialState,
  },
  {
    name: 'notifications',
    basicType: constants.NOTIFICATIONS,
    initialState: notificationsInitialState,
  },
];
