import {createAsyncThunk, ThunkAction} from '@reduxjs/toolkit';

import {
    ExampleServices
} from '../services'

export const ExampleAction = createAsyncThunk(
    'ExampleAction',
    async (_, thunkAPI) => {
      try {
        return await ExampleServices();
      } catch (error: any) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    },
  );