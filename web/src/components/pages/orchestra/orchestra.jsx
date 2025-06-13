import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./orchestra.css"; // optional for styling

const Orchestra = () => {
  return (
    <div>
      <Navigation />
      <div className="musician_container">
        <h1>NATTUVANGAM</h1>
        <p>
          <b>Smt. Jinoo Varghese </b>is an accomplished dancer and instructor of
          Bharatanatyam and is the Artistic Director of Soorya Dance School. She
          started learning dance at the age of 5 under Guru Mohana Tulsi, and
          she further learned Bharatanatyam under Smt. Girija Chandran. She is
          the recipient of the merit scholarship from CCRT, New Delhi in the
          field of Bharatanatyam. She has worked closely with many eminent gurus
          in India on their productions all over India. She has performed as a
          soloist at prestigious venues, receiving critical acclaim. As a
          choreographer, she has created numerous short works and evening-length
          productions. Through her dance academy, Soorya Dance School at
          Northbrook, IL, she is able to put her passion for dance into action.
        </p>
      </div>
    </div>
  );
};

export default Orchestra;
