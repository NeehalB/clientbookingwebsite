import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userBookings } from "../../store/booking/Booking.Action";
import AppBar from "../common/Appbar";

const Booking = () => {
  const { _id, email } = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userBookings({ _id: _id }));
  }, []);
  const bookingData = useSelector((state) => state.book.bookings);
  console.log(bookingData.data);
  return (
    <>
    <AppBar/>
    <Container className="booking-page my-5">
      <Row>
        <h1>User's Bookings</h1>
        {bookingData.data?.map(
          ({
            hotel_name,
            room_name,
            razorpay_payment_id,
            order_id,
            checkin,
            checkout,
            room_cost,
          }) => {
            return (
              <Col md={6} className="g-5">
                <Row className=" border p-4 rounded-4 justify-content-between align-item-center">
                  <h4 className="mb-4">{hotel_name}</h4>
                  <Col md={6}>
                    <p>Room name:</p>
                  </Col>
                  <Col md={6}>
                    <p>{room_name}</p>
                  </Col>
                  <hr />
                  <h5 className="mb-3">Your trip</h5>
                  <Col md={6}>
                    <p>Email:</p>
                    <p>Phone:</p>
                    <p>Date:</p>
                    <p>Amout paid:</p>
                    <p>Order id:</p>
                    <p>Payment id:</p>
                  </Col>
                  <Col md={6}>
                    <p>{email}</p>
                    <p>9321759434</p>
                    <p>
                      {checkin} to {checkout}
                    </p>
                    <p>{room_cost} $</p>
                    <p>{order_id}</p>
                    <p>{razorpay_payment_id}</p>
                  </Col>
                </Row>
              </Col>
            );
          }
        )}
      </Row>
    </Container>
    </>
  );
};

export default Booking;
