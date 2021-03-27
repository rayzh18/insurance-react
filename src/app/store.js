import { configureStore } from '@reduxjs/toolkit';
import tripReducer from '../features/tripSlice';

export default configureStore({
	reducer: {
		trip: tripReducer,
	},
});
