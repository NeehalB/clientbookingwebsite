import React, { useEffect, useState } from "react";
import offerOne from "../../images/offer1.png";
import offerTwo from "../../images/offer2.png";
import offerAlert from "../../images/offerAlert.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllDestinations } from "../../store/destination/Destination.Action";
import DestinationCard from "../common/DestinationCard";
import HotelCards from "../common/HotelCards";
import { getAllHotels } from "../../store/hotel/Hotel.Action";
import Footer from "../common/Footer";
import DatePicker from "../common/DatePicker";
import dayjs from "dayjs";
import DropdownComp from "../common/DropdownComp";
import AppBar from "../common/Appbar";

const Home = () => {
  const dt = new Date();
  let formatedCheckInDate = dt.setDate(dt.getDate());
  let formatedCheckOutDate = dt.setDate(dt.getDate() + 1);
  const [checkIn, setCheckIn] = useState(
    dayjs(formatedCheckInDate).format("YYYY-MM-DD")
  );
  const [checkOut, setCheckOut] = useState(
    dayjs(formatedCheckOutDate + 1).format("YYYY-MM-DD")
  );
  const dispatch = useDispatch();

  // To get data from db to store
  useEffect(() => {
    dispatch(getAllDestinations());
    dispatch(getAllHotels());
  }, []);

  const destination = useSelector(
    (state) => state.destination.destinations.data
  );
  const hotels = useSelector((state) => state.hotel.hotels.data);

  return (
    <>
      <section className="home_banner">
        <AppBar />
        <Container
          fluid
          className="d-flex justify-content-center align-items-center home_banner_container postion-realtive z-0"
        >
          <div className="text-center">
            <h1 className="bolder text-white mb-3" style={{ fontSize: "64px" }}>
              Let the journey begin
            </h1>
            <p className="text-white">
              Get the best prices on 2,000,000+ properties, worldwide
            </p>
          </div>
          <div className="position-absolute search-bar-container w-75 z-1 bg-white rounded-pill px-5 py-3">
            <Row>
              <Col md={3} className="border-end">
                <p className="mb-1">Location</p>
                <DropdownComp destinationData={destination} />
              </Col>
              <Col md={3} className="border-end">
                <p className="mb-1">Check in</p>
                <DatePicker date={checkIn} setDate={setCheckIn} />
              </Col>
              <Col md={3} className="border-end">
                <p className="mb-1">Check out</p>
                <DatePicker date={checkOut} setDate={setCheckOut} />
              </Col>
              <Col md={3} className="text-center m-auto">
                <Button className="w-100 rounded-pill py-3">Search</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="home_offers mt-5 p-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <img className="w-100" src={offerOne} alt="" />
            </Col>
            <Col md={6}>
              <img className="w-100" src={offerTwo} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home_destination mt-5 p-5">
        <Container>
          <h2 className="text-center mb-5 fs-1">Top destinations</h2>
          <Row className="gy-4">
            {destination?.map(
              ({ destination_name, thumbnail_image, _id }, index) => {
                return (
                  <Col key={index} md={4}>
                    <DestinationCard
                      name={destination_name}
                      srcImg={thumbnail_image}
                      destinationId={_id}
                    ></DestinationCard>
                  </Col>
                );
              }
            )}
          </Row>
        </Container>
      </section>
      <section className="home_recomendations mt-5 p-5 w-100 bg-body-tertiary">
        <Container>
          <h2 className="text-center mb-5 fs-1">Recommended for you</h2>
          <Row className="gy-4">
            {hotels?.map(
              (
                { hotel_name, hotel_location, thumbnail_image, base_cost, _id },
                index
              ) => {
                return (
                  <Col key={index} md={4}>
                    <HotelCards
                      name={hotel_name}
                      location={hotel_location}
                      imgSrc={thumbnail_image}
                      cost={base_cost}
                      hotelId={_id}
                    ></HotelCards>
                  </Col>
                );
              }
            )}
          </Row>
        </Container>
      </section>
      <section className="alert_user mt-5 p-5">
        <Container>
          <Row>
            <Col md={6} className="overflow-hidden border rounded-start-4 p-0">
              <img className="w-100" src={offerAlert} alt="Sample." />
            </Col>
            <Col
              md={6}
              className="overflow-hidden border rounded-end-4 d-flex justify-content-center align-items-center"
              style={{ padding: "80px 120px" }}
            >
              <div className="text-center">
                <h2 style={{ fontSize: "36px" }}>
                  Get special offers, and more from Traveler
                </h2>
                <p className="text-light-emphasis">
                  Subscribe to see secret deals prices drop the moment you sign
                  up!
                </p>
                <div className="input-group">
                  <input
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Email"
                  ></input>
                  <span
                    style={{ cursor: "pointer" }}
                    className="input-group-text bg-primary text-white"
                  >
                    Subscribe
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Home;
