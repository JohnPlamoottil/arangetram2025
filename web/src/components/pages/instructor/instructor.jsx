import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./instructor.css"; // optional for styling
import Footer from "../../footer/footer";
import avatar from "../../../assets/avatar.jpg";
import instructor_with_girls from "../../../assets/instructor_with_girls.png";
import soorya_dance_school from "../../../assets/soorya_dance_school.png";
import instructor_with_girls_onstage from "../../../assets/instructor_with_girls_onstage.png";
import guru_second from "../../../assets/guru_second.png";
import frameImage from "../../../assets/macbookpro.png";
// import ComingSoon from "../../coming_soon/coming_soon"; AVAILABLE FULL TIME

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

  // const instructorContent = (
  return (
    <div>
      <Navigation />
      <div>
        <section>
          <h2 className="title_Program">
            Blessings From Guru (Instructor) <br />
            Shreemathi Smt. Jinoo Varghese <br />
            Soorya Dance School
          </h2>
          <div className="instructor__image-container"></div>
          <img
            className="instructor_with_girls"
            src={instructor_with_girls}
            alt="instructor_with_girls"
          />
          <button className="accordion_program" onClick={handleClick}>
            Instructor - Biography <br />
            (click to open) <br />
          </button>
          <div className="panel_program">
            <p className="accordion-text">
              <img className="avatar" src={avatar} alt="avatar" />
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
            <div className="school">
              <img
                className="soorya_school"
                src={soorya_dance_school}
                alt="school"
              />
            </div>
            <p className="accordion-text">
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

          <button className="accordion_program" onClick={handleClick}>
            Nattuvangam <br />
            (click to open)
          </button>
          <div className="panel_program">
            <p className="accordion-text">
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
            <div className="onstage">
              <img
                className="instructor_with_girls_onstage"
                src={instructor_with_girls_onstage}
                alt="instructor_with_girls_ onstage"
              />
            </div>
          </div>
          <button className="accordion" onClick={handleClick}>
            Words of Acknowledgement for Her Students
          </button>
          <div className="panel">
            <p>
              The following clip is taken from Jinoo as a gratitude for helping
              them grow and shape into the young women they turned out to be
              both physically and spiritually.
            </p>
            <div className="video-wrapper__venue">
              <img src={frameImage} alt="Frame" className="video-frame_venue" />
              <div className="laptop-video-overlay"></div>
              <div className="laptop-video-overlay__venue">
                <iframe
                  src="https://www.youtube.com/embed/Gl9EwnTNI4g?si=AMNi-rQbllg1U4q3"
                  title="Instructor Thank You Speech"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="campus__parking-instructor"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="center-image">
        <img className="guru_second" src={guru_second} alt="centered" />
      </div>
      <Navigation />
      <Footer />
    </div>
  );

  // return <ComingSoon message="Guru">{instructorContent}</ComingSoon>;
};

export default Instructor;

// // automatically makes the page available on Sat June21 2pm CST //
//   if (new Date() < new Date("2025-06-21 T00:14:00")) {
//     return <ComingSoon message={"Instructor"} />;
//   } else {}
//     return ()
