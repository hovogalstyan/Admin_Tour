import { configureStore } from '@reduxjs/toolkit';
import { users } from './reducters/users';
import { destinations } from './reducters/destinations';
import {categories} from "./reducters/categories";
import {tours} from "./reducters/tours";

const root = {
  users,
  destinations,
  categories,
  tours,
};

export const store = configureStore({ reducer: root });
