import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helper";

export const addBooking = createAsyncThunk(
  "addBooking",
  async (bookingData, { rejectWithValue }) => {
    try {
      let orderData = { ...bookingData };
      let responseData = null;
      await axios
        .post(`${BASE_URL}/checkout`, {
          amount: bookingData.room_cost,
        })
        .then((res) => {
          responseData = res.data.response;
          var options = {
            key: responseData.key,
            amount: responseData.amount,
            currency: responseData.currency,
            name: "Neehal Bhosale",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: responseData.id,
            handler: async function (response) {
              await axios
                .post(`${BASE_URL}/booking`, {
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                })
                .then(async (res) => {
                  orderData = {
                    ...bookingData,
                    order_id: responseData.id,
                    razorpay_payment_id: res.data.razorpay_payment_id,
                    razorpay_order_id: res.data.razorpay_order_id,
                    razorpay_signature: res.data.razorpay_signature,
                  };
                  const { data } = await axios.post(
                    `${BASE_URL}/add-booking`,
                    orderData
                  );
                  bookingData.navigate("/booking");
                  return data;
                })
                .catch((err) => {
                  console.log(err.message);
                });
            },
            prefill: {
              name: "Neehal Bhosale",
              email: "neehalbhosale@gmail.com",
              contact: "9321759434",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };

          var razor = new window.Razorpay(options);
          razor.open();
        });
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      console.log(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const userBookings = createAsyncThunk(
  "userBookings",
  async (userId, { rejectWithValue }) => {
    console.log(userId)
    try {
      const { data } = await axios.post(`${BASE_URL}/user-bookings`, userId);
      return data;
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      console.log(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
