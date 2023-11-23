import { useEffect, useRef, useState } from "react";
import bannerHotel from "../../images/bannerHotel.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getHotel } from "../../store/hotel/Hotel.Action";
import { getHotelRooms } from "../../store/room/Room.Action";
import { BASE_URL } from "../../helper";
import RoomCard from "../common/RoomCard";
import DatePicker from "../common/DatePicker";
import dayjs from "dayjs";
import { addBooking } from "../../store/booking/Booking.Action";

const HotelPage = () => {
  const dt = new Date();
  let formatedCheckInDate = dt.setDate(dt.getDate());
  let formatedCheckOutDate = dt.setDate(dt.getDate() + 1);
  const [checkIn, setCheckIn] = useState(
    dayjs(formatedCheckInDate).format("YYYY-MM-DD")
  );
  const [checkOut, setCheckOut] = useState(
    dayjs(formatedCheckOutDate + 1).format("YYYY-MM-DD")
  );

  const availability = useRef();

  const { hotel_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotel(hotel_id));
    dispatch(getHotelRooms(hotel_id));
  }, []);

  const hotelData = useSelector((state) => state.hotel.hotel[0]);
  const facilityArray = hotelData?.hotel_facilities.split(", ");
  const rulesArray = hotelData?.hotel_rules.split(", ");

  const hotelRoomsData = useSelector((state) => state.room.rooms.data);
  console.log(hotelRoomsData);

  const bookingData = (room_id, room_name, room_cost, navigate) => {
    const { _id } = JSON.parse(localStorage.getItem("user"));
    const bookingDataInfo = {
      user_id: _id,
      hotel_id: hotel_id,
      hotel_name: hotelData?.hotel_name,
      room_id: room_id,
      room_name: room_name,
      room_cost: room_cost,
      checkin: checkIn,
      checkout: checkOut,
      navigate: navigate,
    };
    dispatch(addBooking(bookingDataInfo));
  };

  return (
    <section className="hotel_page">
      <Container
        fluid
        className="px-0 z-0 position-relative"
        style={{ boxSizing: "border-box" }}
      >
        <img className="w-100" src={bannerHotel} alt="" />
        <div className="position-absolute z-1 top-50 start-50 translate-middle text-white">
          <h1>{hotelData?.hotel_name}</h1>
        </div>
      </Container>
      <Container fluid>
        <Row className="mt-5 justify-content-between border rounded-4 overflow-hidden mx-3">
          <Col md={4} className="ps-0">
            <img
              className="w-100"
              style={{ height: "100%" }}
              src={`${BASE_URL}/uploads/${hotelData?.hotel_images[0]}`}
              alt=""
            />
          </Col>
          <Col md={8} className="pe-0">
            <Row className="gy-4">
              {hotelData?.hotel_images.slice(1).map((img, index) => {
                return (
                  <Col md={6} key={index}>
                    <img
                      className="w-100"
                      src={`${BASE_URL}/uploads/${img}`}
                      alt=""
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <Col md={8}>
            <h3>About this hotel</h3>
            <p> {hotelData?.hotel_description}</p>
            <hr className="my-5" />
            <h3>Hotel facilities</h3>
            <Row className="mt-3">
              {facilityArray?.map((element, index) => {
                return (
                  <Col md={4} key={index}>
                    <p>{element}</p>
                  </Col>
                );
              })}
            </Row>
            <hr className="my-5" />
            <h3>Rules</h3>
            <Row className="mt-3">
              {rulesArray?.map((element, index) => {
                return (
                  <Col md={6} key={index}>
                    <p>{element}</p>
                  </Col>
                );
              })}
            </Row>
            <hr className="my-5" />
            <h3 ref={availability}>Availability</h3>
            {hotelRoomsData?.map(
              (
                {
                  thumbnail_image,
                  room_name,
                  room_footage,
                  number_of_beds,
                  number_of_adults,
                  number_of_childrens,
                  base_cost,
                  _id,
                },
                index
              ) => {
                return (
                  <RoomCard
                    key={index}
                    imgSrc={thumbnail_image}
                    name={room_name}
                    footage={room_footage}
                    beds={number_of_beds}
                    adults={number_of_adults}
                    children={number_of_childrens}
                    cost={base_cost}
                    bookingData={bookingData}
                    roomId={_id}
                  />
                );
              }
            )}
          </Col>
          <Col md={4}>
            <div
              className="w-100 py-4 px-3 border rounded-4 position-sticky top-0"
              style={{ boxSizing: "border-box" }}
            >
              <div className="w-100 mb-3 d-flex justify-content-between">
                <Button className="hotel_button rounded-pill">Book</Button>
                <Button className="hotel_button rounded-pill btn-light">
                  Inquiry
                </Button>
              </div>
              <p className="text-body-secondary">
                From <span className="bold fs-5 text-black">€150.00</span>{" "}
                /night
              </p>
              <div className="d-flex w-100 border rounded-top-4 overflow-hidden">
                <div className="w-50 border-end p-3">
                  <DatePicker
                    date={checkIn}
                    setDate={setCheckIn}
                    labelName={"Check in"}
                  />
                </div>
                <div className="w-50 p-3">
                  <DatePicker
                    date={checkOut}
                    setDate={setCheckOut}
                    labelName={"Check out"}
                  />
                </div>
              </div>
              <div className="w-100 border border-top-0 rounded-bottom-4 p-3 mb-3">
                <p className="mb-2">Guests</p>
                <p className="mb-0">1 guest, 1 room.</p>
              </div>
              <Button
                className="w-100 rounded-pill py-3"
                onClick={() => {
                  availability.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Check Availability
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HotelPage;
