import React from "react";
import { useSearchParams } from "react-router-dom";
import "./dancer.css"; // optional for styling
import Navigation from "../../navigation-links/navigation-links";
import mom_michelle from "../../../assets/mom_michelle.png";
import michelle_full from "../../../assets/michelle_full.png";
import michelle_headshot from "../../../assets/michelle_headshot.png";
import michelle_varnum from "../../../assets/michelle_varnum.png";
import michelle_solo from "../../../assets/michelle_solo.png";
const dancers = {
  Michelle: {
    autobio: "autobio",
    shishya: "message",
    solo: "solo",
    invite: "invite",
    rsvp: "confirm",
    button: "guestbook",
  },
  Andrea: {
    autobio: "autobio",
    shishya: "message",
    solo: "solo",
    invite: "invite",
    rsvp: "confirm",
    button: "guestbook",
  },
  Jana: {
    autobio: "autobio",
    shishya: "message",
    solo: "solo",
    invite: "invite",
    rsvp: "confirm",
    button: "guestbook",
  },
  Rose: {
    autobio: "autobio",
    shishya: "message",
    solo: "solo",
    invite: "invite",
    rsvp: "confirm",
    button: "guestbook",
  },
  Jenna: {
    autobio: "autobio",
    shishya: "message",
    solo: "solo",
    invite: "invite",
    rsvp: "confirm",
    button: "guestbook",
  },
  Amarya: {
    autobio: "autobio",
    shishya: "message",
    solo: "solo",
    invite: "invite",
    rsvp: "confirm",
    button: "guestbook",
  },
};

const Dancer = () => {
  const [searchParams] = useSearchParams();

  const dancer = searchParams.get("dancer");

  const dancerInfo = dancers[dancer];

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
      <div>
        <Navigation />
        <section className="questions">
          <h2 className="title_dancer">Michelle Eapen</h2>
          <h1>{dancerInfo.autobio}</h1>
          <h3>{dancerInfo.bio}</h3>
          <div>
            <img
              className="michelle_full_pose"
              src={michelle_full}
              alt="Michelle's Full Length Pose"
            ></img>
          </div>
          <button className="accordion" onClick={handleClick}>
            Shishya (Autobiography on Michelle)
          </button>
          <div className="panel">
            <p>
              <img
                className="michelle_headshot"
                src={michelle_headshot}
                alt="Michelle's Profile"
              ></img>
              Michelle has been dancing since the age of six, exploring a
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
              along the way.
            </p>
          </div>
          <button className="accordion" onClick={handleClick}>
            Shishya (Biography from Parents)
          </button>
          <div className="panel">
            <p className="">
              Watching Michelle grow into the graceful, confident young woman
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
              purpose. <br />— With love, Amma and Appa
              <img
                className="mom_michelle"
                src={mom_michelle}
                alt="Mom and Michelle"
              />
            </p>
          </div>
          <button className="accordion" onClick={handleClick}>
            Solo Performance
          </button>
          <div className="panel">
            <p>Keerthanam</p>
            <p>Michelle Eapen - 4:41pm to 5:00pm</p>
            <p>
              "Durgae Durgae" is a devotional piece in praise of Goddess Durga,
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
              grace into one powerful performance.
              <img
                className="michelle_solo"
                src={michelle_solo}
                alt="Michelles Solo"
              ></img>
            </p>
          </div>
          <button className="accordion" onClick={handleClick}>
            Invitation Card
          </button>
          <div className="">
            <p className="">..</p>
            <div className=""></div>
          </div>
          <button className="accordion" onClick={handleClick}>
            RSVP Confirmation
          </button>
          <div className="panel">
            <p>Modal for RSVP and buttton linking to guestbook page</p>
          </div>
          <img
            className="michelle_varnum"
            src={michelle_varnum}
            alt="Michelle's sitting pose"
          ></img>
        </section>
      </div>
      <section className="questions">
        <h2 className="title_Andrea">Andrea Jerril Thomas</h2>
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
            {/* <img className="" alt="" /> */}
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
      </section>
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
