import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const { data } = await axios.get('/tasks');
  return data;
});

const initialState = {
  tasks: {
    items: [],
    status: 'loading',
  },
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.tasks.items = [];
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks.items = action.payload;
        state.tasks.status = 'loaded';
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.tasks.items = [];
        state.tasks.status = 'error';
      });
  },
});

export const taskReducer = taskSlice.reducer;
