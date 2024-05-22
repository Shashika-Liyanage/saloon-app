import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookingDataSlice from './BookingDataSlice'; // Ensure the path is correct

const store = configureStore({
  reducer: {
    bookingDataManagement: bookingDataSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
