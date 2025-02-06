import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './slices/tasks';
import { authRecuder } from './slices/auth';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authRecuder,
  },
});

export default store;
