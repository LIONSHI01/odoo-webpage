import React from "react";

import { Image } from "react-bootstrap";
import { AiOutlineStar } from "./ReactIcons";

const AwardCard = ({
  image,
  stars,
  reviews,
  isRating,
  awardText,
  redirectUrl,
  index,
}) => {
  if (isRating) {
    return (
      <div
        className={`d-flex flex-column col-gap-3 align-items-center justify-content-center bg-white rounded-xl odoo-shadow-light
odoo-card-border ${index % 2 === 0 ? "move-down" : "move-up"} `}
        style={{ minWidth: "16rem", padding: "2rem", cursor: "pointer" }}
      >
        <Image src={image} alt="airbnb" height="40px" />
        <div className="d-flex" style={{ gap: "0.3rem" }}>
          {[1, 2, 3, 4, 5].map((score) =>
            stars > score ? (
              <AiOutlineStar size={18} color="var(--color-yellow)" />
            ) : (
              <AiOutlineStar size={18} className="text-muted" />
            )
          )}
        </div>
        <div className="d-flex flex-column align-items-center">
          <span className="fs-5">{stars} out of 5 stars</span>
          <span className="text-muted fs-6">from {reviews} reviews</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`d-flex flex-column col-gap-3 align-items-center bg-white rounded-xl odoo-shadow-light odoo-card-border ${
        index % 2 === 0 ? "move-down" : "move-up"
      } `}
      style={{ minWidth: "16rem", padding: "2rem", cursor: "pointer" }}
    >
      <Image src={image} alt="airbnb" height="40px" />

      <p className="fs-6 text-muted" style={{ textAlign: "center" }}>
        {awardText}
      </p>
      <a
        href={redirectUrl}
        target="_blank"
        rel="noreferrer"
        className="odooLink learn-more-link"
      >
        Learn more
      </a>
    </div>
  );
};

export default AwardCard;
