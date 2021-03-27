import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tripInfo: {
		place: '',
		from: '',
		to: '',
		type: '',
		sport: '',
		persons: [],
	},
};

const tripSlice = createSlice({
	name: 'trip',
	initialState,
	reducers: {
		setTrip: (state, action) => {
			state.tripInfo = action.payload;
		},
	},
});

export const { setTrip } = tripSlice.actions;

export const selectTrip = (state) => state.trip.tripInfo;

export default tripSlice.reducer;
