import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./instructor.css"; // optional for styling
import Footer from "../../footer/footer";
import avatar from "../../../assets/avatar.jpg";
import instructor_with_girls from "../../../assets/instructor_with_girls.png";
import soorya_dance_school from "../../../assets/soorya_dance_school.png";
import instructor_with_girls_onstage from "../../../assets/instructor_with_girls_onstage.png";
import guru_second from "../../../assets/guru_second.png";

const Instructor = () => {
  function handleClick(e) {
    const button = e.target;
    button.classList.toggle("slide");
    const panel = button.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  return (
    <div>
      <Navigation />
      <div>
        <section className="question">
          <h2 className="title_Program">
            Blessings From Guru (Instructor) <br />
            Shreemathi Smt. Jinoo Varghese <br />
            Soorya Dance School
          </h2>
          <div className="instructor__image-container">
            <img className="avatar" src={avatar} alt="avatar" />
            <img
              className="soorya_school"
              src={soorya_dance_school}
              alt="school"
            />
          </div>
          <img
            className="instructor_with_girls"
            src={instructor_with_girls}
            alt="instructor_with_girls"
          />
          <button className="accordion_program" onClick={handleClick}>
            Instructor - Biography (click to open) <br />
          </button>
          <div className="panel_program">
            <p>
              Smt. Jinoo Varghese is an accomplished dancer and instructor of
              Bharatanatyam and is the Artistic Director of Soorya Dance School.
              She started learning dance at the age of 5 under Guru Mohana
              Tulsi, and she further learned Bharatanatyam under Smt. Girija
              Chandran. She is the recipient of the merit scholarship from CCRT,
              New Delhi in the field of Bharatanatyam. She has worked closely
              with many eminent gurus in India on their productions all over
              India. She has performed as a soloist at prestigious venues
              receiving critical acclaim. As a choreographer, she has created
              numerous short works and evening-length productions. Through her
              dance academy, Soorya Dance School at Northbrook, IL, she is able
              to put her passion for dance into action.
            </p>
            <p>
              Jinoo Varghese, the Artistic Director of Soorya Dance School is an
              accomplished exponent of Bharatanatyam and Kuchipudi style of
              dancing and well known choreographer of Indian dance forms. From
              the age of 4, she had training from eminent gurus - Kalamandalam
              Mohana Tulsi, Kalakshetra Vilasini, Girija Chandran (Regatta) etc.
              She received Govt of India National Talent Scholarship for
              Bharatanatyam at the age of 12. Dance was her passion and now she
              is the Artistic Director of Soorya Dance School, Northbrook
              Illinois.
            </p>
          </div>
          <div className="center-image">
            <img
              className="instructor_with_girls_onstage"
              src={instructor_with_girls_onstage}
              alt="instructor_with_girls_ onstage"
            />
          </div>
          <button className="accordion_program" onClick={handleClick}>
            Nattuvangam (click to open)
          </button>
          <div className="panel_program">
            <p>
              Let us take a look at the talent that has gone into the creation
              of this beautiful performance. First, rhythmic beats of
              Nattuvangam by Smt. Jinoo Varghese - Smt Jinoo Varghese is an
              accomplished dancer and instructor of Bharatanatyam and is the
              Artistic Director of Soorya Dance School. She started learning
              dance at the age of 5 under Guru Mohana Tulsi, further learned
              Bharatanatyam under Smt.Girija Chandran. She is the recipient of
              the merit scholarship from CCRT, New Delhi in the field of
              Bharatanatyam. She has worked closely with many eminent gurus in
              India on their productions all over India. She has performed as a
              soloist at prestigious venues receiving critical acclaim. As a
              choreographer, she has created numerous short works and
              evening-length productions. Through her dance academy, Soorya
              Dance school at Northbrook, IL, she is able to put her passion for
              dance into action. Please join me in recognizing Smt. Jinoo
              Varghese. <br />
            </p>
          </div>
        </section>
      </div>
      <div className="center-image">
        <img className="guru_second" src={guru_second} alt="centered" />
      </div>
      <Footer />
    </div>
  );
};

export default Instructor;
