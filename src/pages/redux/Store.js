import { configureStore } from '@reduxjs/toolkit';
import bookingDataSlice from './BookingDataSlice'; // Ensure the path is correct

const store = configureStore({
  reducer: {
    bookingDataManagement: bookingDataSlice,
  },
});

export default store;

