import { Row, Col, Button } from "react-bootstrap";
import { BASE_URL } from "../../helper";
import { useNavigate } from "react-router-dom";

const RoomCard = ({
  imgSrc,
  name,
  footage,
  beds,
  adults,
  children,
  cost,
  bookingData,
  roomId,
}) => {
  const navigate = useNavigate();
  return (
    <Row className="overflow-hidden border rounded-4 my-4">
      <Col md={4} className="p-0">
        <img
          className="w-100"
          style={{ height: "100%" }}
          src={`${BASE_URL}/uploads/${imgSrc}`}
          alt={name}
        />
      </Col>
      <Col
        md={5}
        className="border-end py-5"
        style={{ boxSizing: "border-box" }}
      >
        <h4 className="mb-4 text-center">{name}</h4>
        <Row className="mx-3 text-center">
          <Col md={3}>
            <div
              className="border mb-2 rounded-2"
              style={{
                boxShadow:
                  "0 1px 2px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.05)",
              }}
            >
              <i className="bi bi-house fs-2"></i>
            </div>
            <p>
              {footage} m<sup>2</sup>
            </p>
          </Col>
          <Col md={3}>
            <div
              className="border mb-2 rounded-2"
              style={{
                boxShadow:
                  "0 1px 2px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.05)",
              }}
            >
              <i className="bi bi-usb-mini fs-2"></i>
            </div>
            <p>{beds}X</p>
          </Col>
          <Col md={3}>
            <div
              className="border mb-2 rounded-2"
              style={{
                boxShadow:
                  "0 1px 2px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.05)",
              }}
            >
              <i className="bi bi-person fs-2"></i>
            </div>
            <p>{adults}X</p>
          </Col>
          <Col md={3}>
            <div
              className="border mb-2 rounded-2"
              style={{
                boxShadow:
                  "0 1px 2px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.05)",
              }}
            >
              <i className="bi bi-emoji-smile fs-2"></i>
            </div>
            <p>{children}X</p>
          </Col>
        </Row>
      </Col>
      <Col
        md={3}
        style={{ boxSizing: "border-box" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="w-100 text-center">
          <p>
            From: <span className="bolder fs-4">{cost}.00</span> /per night
          </p>
          <Button
            className="w-50"
            onClick={() => {
              bookingData(roomId, name, cost, navigate);
            }}
          >
            Book
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default RoomCard;
