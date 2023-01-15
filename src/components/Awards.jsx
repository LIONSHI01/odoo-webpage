import React from "react";

import { Container, Button } from "react-bootstrap";
import AwardCard from "./AwardCard";

import { AWARDS } from "../data/constants";

const Awards = () => {
  return (
    <div>
      <Container className="d-flex flex-column">
        <div>
          <Button
            className="rounded-pill mb-4"
            style={{
              backgroundColor: "var(--color-blue)",
              borderColor: "var(--color-blue)",
            }}
          >
            Awards
          </Button>
          <p>Awards for design, creativity, and innovation on the Internet</p>
        </div>
      </Container>
      {/* Cards list */}
      <div className="d-flex col-gap-1 py-3">
        {AWARDS.map(
          ({
            companyImage,
            stars,
            reviews,
            isRating,
            awardText,
            redirectUrl,
          }) => (
            <AwardCard
              key={companyImage}
              image={companyImage}
              stars={stars}
              reviews={reviews}
              isRating={isRating}
              awardText={awardText}
              redirectUrl={redirectUrl}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Awards;
