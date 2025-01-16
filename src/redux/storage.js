import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './slices/tasks';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
