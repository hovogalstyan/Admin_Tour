import { configureStore } from '@reduxjs/toolkit';
import { users } from './reducters/users';

const root = {
  users,
};
export const store = configureStore({ reducer: root });
