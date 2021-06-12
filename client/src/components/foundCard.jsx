import React from "react";
import { Link } from "react-router-dom";

const FoundCard = ({ card }) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="card">
        <img
          className="p-2"
          src={card.bizImage}
          width="100"
          alt={card.bizName}
        />
        <div className="card-body">
          <h5 className="card-title">{card.bizName}</h5>
          <p className="card-text">{card.bizDescription}</p>
          <p className="card-text border-top pt-2">
            <b>Card Number: </b>
            {card.bizNumber} <br />
            <b>Tel: </b>
            {card.bizPhone}
            <br />
            {card.bizAddress}
          </p>
          <Link to={"/wishlist"}>
            <i class="far fa-heart mr-2 me-2"></i>Add To WishList
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default FoundCard;
