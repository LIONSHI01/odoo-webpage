import React from "react";

import { Container, Button } from "react-bootstrap";
import AwardCard from "./AwardCard";

import { AWARDS } from "../data/constants";

const Awards = () => {
  return (
    <section
      className="my-6 py-7 steap-border-bottom"
      style={{ backgroundColor: "#FAFBFF" }}
    >
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

        {/* Cards list */}
        <div className="d-flex col-gap-2 award-list">
          {AWARDS.map(
            (
              {
                companyImage,
                stars,
                reviews,
                isRating,
                awardText,
                redirectUrl,
              },
              i
            ) => (
              <AwardCard
                key={companyImage}
                image={companyImage}
                stars={stars}
                reviews={reviews}
                isRating={isRating}
                awardText={awardText}
                redirectUrl={redirectUrl}
                index={i}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Awards;
