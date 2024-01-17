import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  updateUser,
  sendDataCountryToBackend,
} from '../AuthOperations/AuthOperations';

// import { sendDataCountryToBackend } from '../AuthOperations/DataCountryOperation';

const initialState = {
  token: null,
  userDto: {
    userName: '',
    userEmail: '',
    avatar: '',
    // birthday: '',
    // phone: '',
  },
  countryDto: {
    name: '',
    flagCode: '',
  },
  userId: '',

  isLoggedIn: false,
  isRefresh: true,
  error: null,
};

const handlePending = state => {
  state.isRefresh = true;
};

const handleRejected = (state, action) => {
  state.isRefresh = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(register.fulfilled, (state, action) => {
        return {
          ...state,
          userDto: action.payload.userDto,
          token: action.payload.token,
          isLoggedIn: true,
        };
      })

      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.userDto = action.payload.userDto;
        state.token = action.payload.token;

        console.log('login action', action);
        state.isLoggedIn = true;
        state.error = null;
      })

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.userDto = { userName: null, userEmail: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefresh = false;
      })

      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.rejected, handleRejected)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.userDto = action.payload.userDto;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userDto = { ...state.userDto, ...action.payload };
      })

      .addCase(sendDataCountryToBackend.pending, handlePending)
      .addCase(sendDataCountryToBackend.rejected, (state, action) => {
        console.error(
          'sendDataCountryToBackend failed with error:',
          action.error
        );
        console.log('action:', action);
        console.log('action.payload:', action.payload);
        console.log('action.meta.arg:', action.meta.arg);
        handleRejected(state, action);
      })
      .addCase(sendDataCountryToBackend.fulfilled, (state, action) => {
        // return {
        //   ...state,
        //   countryDto: action.payload.countryDto,
        //   token: action.payload.token,
        //   isLoggedIn: true,
        // };
        state.countryDto = action.payload.countryDto;
        console.log('action', action);
      }),
});

export default authSlice.reducer;
