import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../helper";

const DestinationCard = ({ name, srcImg, destinationId }) => {
  return (
    <div className="position-relative z-0 rounded-3 overflow-hidden destination-card-container">
      <img
        className="w-100"
        src={`${BASE_URL}/uploads/${srcImg}`}
        alt={name}
      ></img>
      <div className="position-absolute z-2 top-50 start-50 translate-middle">
        <h3>
          <Link
            className="text-decoration-none text-white fs-2 "
            to={`/destination/${destinationId}`}
          >
            {name}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default DestinationCard;
