import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/registration/Login";
import SignUp from "./components/registration/Signup";
import Home from "./components/home/Home";
import DestinationPage from "./components/destinationPage/DestinationPage";
import HotelPage from "./components/hotelPage/HotelPage";
import Booking from "./components/booking/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/destination/:destination_id"
          element={<DestinationPage />}
        ></Route>
        <Route path="/hotel/:hotel_id" element={<HotelPage />}></Route>
        {/* <Route path="/" element={<GoogleUserLogin />}></Route> */}
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
