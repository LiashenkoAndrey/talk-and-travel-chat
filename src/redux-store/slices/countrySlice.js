import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countryRooms: [],
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    addCountryRoom: (state, action) => {
      state.countryRooms = [...state.countryRooms, action.payload];
    },
    removeCountryRoom: () => {},
  },
});

export const { addCountryRoom, removeCountryRoom } = countrySlice.actions;

export default countrySlice.reducer;
