import { useEffect } from "react";
import bannerHotel from "../../images/bannerHotel.png";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSpecificDestination } from "../../store/destination/Destination.Action";
import { getDestinationHotel } from "../../store/hotel/Hotel.Action";
import HotelCards from "../common/HotelCards";
import { BASE_URL } from "../../helper";
import Footer from "../common/Footer";

const DestinationPage = () => {
  const { destination_id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificDestination(destination_id));
    dispatch(getDestinationHotel(destination_id));
  }, [destination_id]);

  const destinationData = useSelector((state) => state.destination.destination);
  const hotelData = useSelector((state) => state.hotel.hotels);
  console.log(hotelData);

  return (
    <section className="destination_page">
      <Container fluid className="px-0 z-0 position-relative">
        <img className="w-100" src={bannerHotel} alt="" />
        <div className="position-absolute z-1 top-50 start-50 translate-middle text-white">
          <h1>{destinationData?.destination_name}</h1>
        </div>
      </Container>
      <Container className="my-5">
        <Carousel>
          {destinationData.destination_images?.map((imgName, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="w-100"
                  src={`${BASE_URL}/uploads/${imgName}`}
                  alt=""
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
      <Container>
        <Row style={{ marginBottom: "170px" }}>
          <Col md={6}>
            <h2 className="mb-4">{destinationData?.destination_name}</h2>
            <p className="text-secondary">
              {destinationData?.destination_description}
            </p>
          </Col>
          <Col md={6}></Col>
        </Row>
        <Row className="justify-content-center my-5">
          <h2 className="text-center mb-4">
            {destinationData?.destination_name}
          </h2>
          {hotelData.data?.map(
            (
              { hotel_name, hotel_location, thumbnail_image, base_cost, _id },
              index
            ) => {
              return (
                <Col md={4} key={index}>
                  <HotelCards
                    name={hotel_name}
                    location={hotel_location}
                    imgSrc={thumbnail_image}
                    cost={base_cost}
                    hotelId={_id}
                  />
                </Col>
              );
            }
          )}
        </Row>
      </Container>
      <Footer />
    </section>
  );
};

export default DestinationPage;
