import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateTypes} from '../../Models'

import {
  ExampleAction
} from '../action'

  const initialState: InitialStateTypes = {
    isAuthenticated: false,
    isLoading:false,
    data:[],
  };

  export const reducer = createSlice({
    name: 'global',
    initialState,
    reducers: {
      authenticateUser: (state, action) => {
        state.isAuthenticated = action.payload;
      },
      logout: state => {
        state.isAuthenticated = false
      },
      clearStates: state => {

      },
    },
    extraReducers: builder => {
      builder

      .addCase(ExampleAction.pending, state => {
        state.isLoading = true
      })
      .addCase(ExampleAction.fulfilled, (state, action: any) => {
        if (action.payload?.status || action.payload?.code === 200) {
            state.data = action.payload.data
            console.log('data loaded')
        }
        state.isLoading = false
      })
      .addCase(ExampleAction.rejected, (state, action: any) => {
        state.isLoading = false
        console.log('Error')
      });  

    /* --------------------------------------------------------
      this block of code should repeted for each action in application, all actions have three cases (Pending,fulfilled,rejected), 
      We should handle each case and define the behivor application

      .addCase(ExampleAction.pending, state => {

      })
      .addCase(ExampleAction.fulfilled, (state, action: any) => {

      })
      .addCase(ExampleAction.rejected, (state, action: any) => {

      });  

    -----------------------------------------------------------*/


    },
  });

export const {authenticateUser, logout, clearStates} = reducer.actions;

export default reducer.reducer;