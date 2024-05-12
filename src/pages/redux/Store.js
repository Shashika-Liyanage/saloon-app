import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import BookingDataSlice from "./BookingDataSlice";

export default configureStore({
    reducer: {
        bookingDataManagement: BookingDataSlice
    },
    middleware: [thunk],
  });