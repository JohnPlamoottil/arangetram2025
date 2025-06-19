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
import andrea_full from "../../../assets/andrea_full.png";
import andrea_headshot from "../../../assets/andrea_headshot.png";
import mom_andrea from "../../../assets/mom_andrea.png";
import andrea_solo from "../../../assets/andrea_solo.png";
import andrea_invitation from "../../../assets/andrea_invitation.png";
import andrea_varnum from "../../../assets/andrea_varnum.png";
import jana_full from "../../../assets/jana_full.png";
import jana_headshot from "../../../assets/jana_headshot.png";
import mom_jana from "../../../assets/mom_jana.png";
import jana_solo from "../../../assets/jana_solo.png";
import jana_invitation from "../../../assets/jana_invitation.png";
import jana_varnum from "../../../assets/jana_varnum.png";
const dancers = {
  michelle: {
    shortName: "Michelle",
    fullName: `Michelle Eapen`,
    fullPose: michelle_full,
    headshot: michelle_headshot,
    autobio: `Michelle has been dancing since the age of six, exploring a variety of styles including Bharatanatyam, Cinematic, and Western dance. She began her dance journey under Chinu Thottam, where she took her first steps into the world of dance. In third grade, she began her formal training in Bharatanatyam under Jinoo Varghese, who has played an important role in developing her growth both as a dancer and a person. Through Bharatanatyam, Michelle discovered a deeper connection to her cultural identity and embraced the values of discipline, dedication, and responsibility. Her love for dance has given her the opportunity to perform at several events, including Flowers TV USA, CMA, Kalakshetra, and other competitions. Michelle is currently a student at Wheeling High School and will be entering 11th grade this fall. Outside of dance, she is actively involved in Track, Flag Football, ASA, and NHS. For Michelle, dance is where she feels the most confident and free. It’s something that brings her joy and helps her be her true self. Today’s Arangetram represents a significant milestone in her life, a celebration of her hard work, passion for the art, and heartfelt gratitude to her teacher, family, and all who have supported her along the way. `,
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
    dance_title: `Keerthanam`,
    solo_duration: `Michelle Eapen - 4:41pm to 5:00pm`,
    solo: `Durgae Durgae" is a devotional piece in praise of Goddess Durga,
              the fierce yet compassionate protector of the universe. 
              The choreography highlights Durga’s divine form:
              her eighteen golden hands,
              her thousand eyes, 
              her thousand names, and 
              vividly portrays her holding sacred weapons like the conch, 
              discus, bow, and arrow, seated majestically upon a lion. 
              The piece also brings to life the battle between Durga and Mahishasura, 
              culminating in the slaying of the demon king. 
              Additionally, it celebrates Durga as the embodiment of both strength 
              and beauty, with her graceful, fish-shaped eyes. 
              The item concludes with the poet, Madurai Krishnan, offering his
              salutations to the goddess, seeking her blessings for protection,
              strength, and victory over all obstacles.  
              Set to Ragam Revathi and Adi Talam, this piece blends devotion, valor, and
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
    fullPose: andrea_full,
    headshot: andrea_headshot,
    autobio: `Andrea is a vibrant and multi-talented 15-year-old artist. An incoming sophomore at Stevenson High School, she began her Bharatanatyam journey at the age of 5 under the guidance of Guru Jinoo Varghese and continues to train with dedication and passion.
In addition to Bharatanatyam, Andrea is also trained in cinematic, ballet, and hip hop dance styles, allowing her to explore movement across cultures and genres.
Andrea also has a deep love for music and performance. She plays the violin, electric guitar, and electric bass, and draws inspiration from a wide range of musical styles—fueling her creativity and sense of rhythm in unexpected ways.
Andrea is also a student-athlete, proudly representing her school as a varsity wrestler—a testament to her discipline, resilience, and drive both on and off the mat. As an active participant in school cultural events, she continues to balance her artistic and athletic passions with grace, commitment, and enthusiasm.
Driven by a strong desire to make a difference, Andrea aspires to pursue a career in the medical field, where she hopes to explore meaningful ways to help and serve humanity. Her compassion, curiosity, and sense of purpose are at the heart of everything she does.
She extends her heartfelt thanks to her beloved Guru, Jinoo Varghese, for her unwavering support and mentorship—for nurturing Andrea’s classical roots while inspiring her to grow as a confident, well-rounded artist.
`,
    shishya: `Watching our Andrea grow has been one of the greatest joys of our lives. From her earliest days, she has carried a quiet strength and a soft heart — gentle in nature, yet bold in spirit. She is calm and composed in public, but in the company of those she loves, her playful, mischievous side shines through. Among her closest friends, she is loud, confident, and full of life — never afraid to speak her mind and lift others up.

She gives selflessly, often putting others’ happiness before her own. Whether it's a toy, time, or a piece of her favorite treat, she never hesitates to share. At home, she’s the cool big sister — teasing, laughing, and playing endlessly with her little brother, finding joy in simply being with him (and often in annoying him too!). She is soft-spoken but firm, kind but fearless — a beautiful balance that makes her truly special.

Dance has been a constant in her life — a space where her inner world comes alive. Over the years, it has helped her find grace, discipline, and deep connection to tradition. Through every movement and every expression, we see her love for the art and the quiet dedication behind it.

As parents, we feel truly blessed to watch her grow into the young woman she is — full of heart, full of spirit, and full of promise.

With love and pride,
Appa & Amma`,
    mother_daughter: mom_andrea,
    dance_title: `Sada Shiva Kavuthuvam `,
    solo_duration: `Andrea Jeril Thomas - 20min`,
    solo: `Sada Shiva Kavuthuvam is a vibrant and powerful invocation in praise of Lord Shiva, the eternal cosmic dancer, Nataraja. The piece celebrate Shiva’s divine attributes — his matted locks crowned with the crescent moon, his all-seeing third eye of wisdom, the resonant damaru heralding the sound of creation. Through expressive storytelling, the dancer brings to life the tales of Manmada reduced to ashes by Shiva’s fiery gaze, Markandeya rescued from the clutches of death, and the grandeur of Shiva’s cosmic dance, lifting his right leg in supreme bliss. This item is set in Ragam Kalyani and Sankeerna Jathi Triputa Talam.`,
    solo_photo: andrea_solo,
    invite: andrea_invitation,
    rsvp: "confirm",
    button: "guestbook",
    varnum: andrea_varnum,
  },
  jana: {
    shortName: "Jana",
    fullName: `Jana Scaria`,
    fullPose: jana_full,
    headshot: jana_headshot,
    autobio: `Jana Ann Scaria began dancing at the young age of five. She started her Bharatanatyam journey under the guidance of Guru Smt. Jinoo Varghese, while also learning Cinematic and Western dance at the Syro Malabar Cultural Academy under Sreevidhya Vijayan and Varsha Vijayan. Over the years, she has competed in many events, such as CMA, Kalakshetra, and the Syro Malabar Youth Festival, earning numerous awards. She also performs annually at the Syro Malabar Perunnal. In addition to dance, Jana enjoys playing volleyball. She has played on her school team for the past two years and has been a member of the club team “The Edge” for three years. Along with her involvement in dance and athletics, Jana is a talented violinist and a member of her middle school orchestra. Her favorite subjects in school include math and science. Jana will be a freshman at John Hersey High School this coming fall and is very excited to take the next step in her academic journey. Jana has the opportunity to complete her Arangetram today, thanks to God’s grace, her guru’s guidance, her loved ones’ support, and her own hard work.`,
    shishya: `Our dearest Jana, Today, as you take the stage for your Arangetram, our hearts are filled with pride, joy, and deep gratitude. This milestone is not just a performance it is the culmination of years of dedication, discipline, and passion. We have witnessed your journey the early lessons, the aching feet, the endless hours of practice and we are amazed at the grace, strength, and maturity you bring to your art.
Your Arangetram is a celebration of tradition and talent, but more than that, it is a reflection of your inner light and hard work. You’ve shown us what it means to stay committed to a goal and to honor culture with devotion and sincerity.
We are incredibly proud of the dancer you’ve become, but even more proud of the beautiful person you are humble, kind, and determined. May this performance be the beginning of many more achievements and a lifelong love for the arts.
With all our love and blessings,
-Appai & Amma`,
    mother_daughter: mom_jana,
    dance_title: `Padam`,
    solo_duration: `Jana Scaria - 16min`,
    solo: `Padam is an expressive piece in Bharatanatyam where the dancer conveys deep emotions and narrates a story primarily through abhinaya, or facial expressions and hand gestures. This Padam is based on the biblical story of Esther, the beautiful Jewish queen. She risks her life to save the Jewish people from destruction when the court official Haman persuades the king to authorize a pogrom against all the Jews of the empire. The dancer describes the story where Es1ther asks the king to a dinner party. The king was happy and granted her a wish, Esther reveals her true purpose and explains Haman's wicked plan to destroy her and her people. The King ordered to execute Haman on the gallows he built for Mordecai. The Story of Esther emphasizes the power of God, instructing us we should use his blessings to help others. This item is set in Ragamalika and Talamalika. `,
    solo_photo: jana_solo,
    invite: jana_invitation,
    rsvp: "confirm",
    button: "guestbook",
    varnum: jana_varnum,
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
              className={`full_pose full_pose_${dancerName}`}
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
            <p>{dancerInfo.dance_title}</p>
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
            <p>
              <img
                className={`invite_card invite_card_${dancerName}`}
                src={dancerInfo.invite}
                alt="invitation"
              />
              Dinner to Follow After the Performance
            </p>
          </div>
          <button className="accordion" onClick={handleClick}>
            RSVP
          </button>
          <div className="panel">
            <App />
            <p></p>
            <a href="/guestbook">Home</a>
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
