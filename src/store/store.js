import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./users/UserSlice";
import DestinationReducer from "./destination/DestinationSlice";
import HotelReducer from "./hotel/HotelSlice";
import RoomReducer from "./room/RoomSlice";
import BookingReducer from "./booking/BookingSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    destination: DestinationReducer,
    hotel: HotelReducer,
    room: RoomReducer,
    book: BookingReducer,
  },
});

export default store;
