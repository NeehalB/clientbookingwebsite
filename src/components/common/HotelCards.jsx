import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../helper";

const HotelCards = ({ imgSrc, name, location, cost, hotelId }) => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src={`${BASE_URL}/uploads/${imgSrc}`}
        alt={name}
      />
      <Card.Body>
        <Card.Title>
          <Link
            className="text-decoration-none text-dark"
            to={`/hotel/${hotelId}`}
          >
            {name}
          </Link>
        </Card.Title>
        <Card.Text>{location}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="mb-3">
          From: <span className="bolder fs-4">{cost}.00</span> /per night
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default HotelCards;
