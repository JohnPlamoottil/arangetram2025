import React from "react";
import { useSearchParams } from "react-router-dom";
import "./dancer.css"; // optional for styling
import { App } from "./rsvp.jsx";
import Navigation from "../../navigation-links/navigation-links";
import michelle_full from "../../../assets/michelle_full.png";
import michelle_headshot from "../../../assets/michelle_headshot.png";
import mom_michelle from "../../../assets/mom_michelle.png";
import michelle_solo from "../../../assets/michelle_solo.png";
import michelle_invitation from "../../../assets/michelle_invitation.png";
import michelle_varnum from "../../../assets/michelle_varnum.png";
import Guestbook from "../guestbook/guestbook.jsx";
// import andrea_full from "../../../assets/andrea_full.png"
// import andrea_headshot from "../../../assets/andrea_headshot.png"

const dancers = {
  michelle: {
    shortName: "Michelle",
    fullName: `Michelle Eapen`,
    fullPose: michelle_full,
    headshot: michelle_headshot,
    autobio: `Michelle has been dancing since the age of six, exploring a
              variety of styles including Bharatanatyam, Cinematic, and Western
              dance. She began her dance journey under Chinu Thottam, where she
              took her first steps into the world of dance. In third grade, she
              began her formal training in Bharatanatyam under Jinoo Varghese,
              who has played an important role in developing her growth both as
              a dancer and a person. Through Bharatanatyam, Michelle discovered
              a deeper connection to her cultural identity and embraced the
              values of discipline, dedication, and responsibility. Her love for
              dance has given her the opportunity to perform at several events,
              including Flowers TV USA, CMA, Kalakshetra, and other
              competitions.
              <br />
              Michelle is currently a student at Wheeling High School and will
              be entering 11th grade this fall. Outside of dance, she is
              actively involved in Track, Flag Football, ASA, and NHS. For
              Michelle, dance is where she feels the most confident and free.
              It’s something that brings her joy and helps her be her true self.
              Today’s Arangetram represents a significant milestone in her life,
              a celebration of her hard work, passion for the art, and heartfelt
              gratitude to her teacher, family, and all who have supported her
              along the way.`,
    shishya: `Watching Michelle grow into the graceful, confident young woman
              she is today has been one of our greatest joys. From her first
              dance class at age six to this day, her Arangetram, we have seen
              her dedication, resilience, and passion shine through. Dance has
              shaped her in so many ways—teaching her discipline, patience, and
              how to express herself with strength and grace. We are incredibly
              proud of her journey, not just as a dancer but as a kind,
              determined individual who balances so much with heart and focus.
              This milestone is a reflection of years of commitment, and we are
              so grateful to her guru, Jinoo Varghese, for guiding her with
              wisdom and care. Michelle, we love you deeply and are so proud of
              you. May you continue to dance through life with the same joy and
              purpose. 
              — With love, Amma and Appa`,
    mother_daughter: mom_michelle,
    solo_duration: `Michelle Eapen - 4:41pm to 5:00pm`,
    solo: `Durgae Durgae" is a devotional piece in praise of Goddess Durga,
              the fierce yet compassionate protector of the universe. <br />
              The choreography highlights Durga’s divine form:
              <br />
              her eighteen golden hands, <br /> her thousand eyes, <br /> her
              thousand names <br /> and vividly portrays her holding sacred
              weapons like the conch, discus, bow, and arrow, seated
              majestically upon a lion. <br /> The piece also brings to life the
              battle between Durga and Mahishasura, culminating in the slaying
              of the demon king. Additionally, it celebrates Durga as the
              embodiment of both strength and beauty, with her graceful,
              fish-shaped eyes. <br />
              The item concludes with the poet, Madurai Krishnan, offering his
              salutations to the goddess, seeking her blessings for protection,
              strength, and victory over all obstacles. <br /> Set to Ragam
              Revathi and Adi Talam, this piece blends devotion, valor, and
              grace into one powerful performance.`,
    solo_photo: michelle_solo,
    invite: michelle_invitation,
    rsvp: "confirm",
    button: "guestbook",
    varnum: michelle_varnum,
  },
  andrea: {
    shortName: "Andrea",
    fullName: `Andrea Sherril Thomas`,
    // fullPose: andrea_full,
    // headshot: andrea_headshot,
    autobio: ``,
    shishya: ``,
    // mother_daughter: mom_andrea,
    solo: `words`,
    // solo_photo: andrea_solo,
    // invite: andrea_invitation,
    rsvp: "confirm",
    button: "guestbook",
    // varnum: andrea_varnum,
  },
  jana: {
    shortName: "Jana",
    fullName: `Jana Scaria`,
    // fullPose: jana_full,
    // headshot: jana_headshot,
    autobio: ``,
    shishya: ``,
    // mother_daughter: mom_jana,
    solo: `words`,
    // solo_photo: jana_solo,
    // invite: jana_invitation,
    rsvp: "confirm",
    button: "guestbook",
    // varnum: jana_varnum,
  },
  rose: {
    shortName: "Rose",
    fullName: `Rose Thomas`,
    // fullPose: rose_full,
    // headshot: rose_headshot,
    autobio: ``,
    shishya: ``,
    // mother_daughter: mom_rose,
    dance_title: `Keerthanam`,
    solo: `words`,
    // solo_photo: rose_solo,
    // invite: rose_invitation,
    rsvp: "confirm",
    button: "guestbook",
    // varnum: rose_varnum,
  },
  jenna: {
    shortName: "Jenna",
    fullName: `Jenna Plamoottil`,
    // fullPose: jenna_full,
    // headshot: jenna_headshot,
    autobio: ``,
    shishya: ``,
    // mother_daughter: mom_jenna,
    dance_title: `Keerthanam`,
    solo: `words`,
    // solo_photo: jenna_solo,
    // invite: jenna_invitation,
    rsvp: "confirm",
    button: "guestbook",
    // varnum: jenna_varnum,
  },
  amarya: {
    shortName: "Amarya",
    fullName: `Amarya Chirayil Koola`,
    // fullPose: amarya_full,
    // headshot: amarya_headshot,
    autobio: ``,
    shishya: ``,
    // mother_daughter: mom_amarya,
    solo: `words`,
    // solo_photo: amarya_solo,
    // invite: amarya_invitation,
    rsvp: "confirm",
    button: "guestbook",
    // varnum: amarya_varnum,
  },
};

const Dancer = () => {
  const [searchParams] = useSearchParams();

  const dancerName = searchParams.get("dancer").toLowerCase();

  const dancerInfo = dancers[dancerName];
  console.log(dancers[dancerName]);

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

  console.log(dancerInfo);

  return (
    <div>
      <div>
        <Navigation />
        <section className="questions">
          <h2 className="title_dancer">{dancerInfo.fullName}</h2>
          <div className="outer_fullpose">
            <img
              className="full_pose"
              src={dancerInfo.fullPose}
              alt="Full Length Pose"
            ></img>
          </div>
          <button className="accordion" onClick={handleClick}>
            Shishya (Autobiography on {dancerInfo.shortName})
          </button>
          <div className="panel">
            <p>
              {dancerInfo.autobio}
              <img
                className="headshot"
                src={dancerInfo.headshot}
                alt="headshot"
              ></img>
            </p>
          </div>
          <button className="accordion" onClick={handleClick}>
            Shishya (Biography from Parents)
          </button>
          <div className="panel">
            <p>
              {dancerInfo.shishya}
              <img
                className="mother_daughter"
                src={dancerInfo.mother_daughter}
                alt={`Mom and ${dancerInfo.shortName}`}
              />
            </p>
          </div>
          <button className="accordion" onClick={handleClick}>
            Solo Performance
          </button>
          <div className="panel">
            <p>{dancerInfo.solo_duration}</p>
            <p>{dancerInfo.solo}</p>
            <p>
              <img
                className="solo_photo"
                src={dancerInfo.solo_photo}
                alt="solo_photo"
              ></img>
            </p>
          </div>
          <button className="accordion" onClick={handleClick}>
            Invitation Card
          </button>
          <div className="panel">
            <p className="">
              <img
                className={`invite_card invite_card_${dancerName}`}
                src={dancerInfo.invite}
                alt="invitation"
              ></img>
              Dinner to Follow After the Performance
            </p>
          </div>
          <div className="accordion" onClick={handleClick}>
            {dancerInfo.RSVP}
          </div>
          <div className="panel">
            <App />
            <p></p>
            <a href="/guestbook">Guestbook</a>
          </div>
          <img
            className="varnum_pose"
            src={dancerInfo.varnum}
            alt="sitting pose"
          ></img>
          <Guestbook dancerName={dancerName} />
        </section>
      </div>
    </div>
  );
};

export default Dancer;

// copy paste section for the next dancer:
{
  /* <section className="questions">
  <h2 className="title_Andrea">Michele Eapen</h2>
  <button className="accordion" onClick={handleClick}>
    ..
  </button>
  <div className="panel">
    <p>
      ..
      <br />
      ..
    </p>
  </div>
  <button className="accordion" onClick={handleClick}>
    ..
  </button>
  <div className="panel">
    <p className="">
      ..
      <img className="" alt="auditorium" />
    </p>
  </div>
  <button className="accordion" onClick={handleClick}>
    ..
  </button>
  <div className="panel">
    <p>..</p>
    <p>..</p>
    <p>..</p>
  </div>
  <button className="accordion" onClick={handleClick}>
    ..
  </button>
  <div className="">
    <p className="">..</p>
    <div className=""></div>
  </div>
  <button className="accordion" onClick={handleClick}>
    ..
  </button>
  <div className="panel">
    <p>..</p>
  </div>
</section>; */
}
