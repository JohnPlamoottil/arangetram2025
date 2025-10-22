import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./orchestra.css"; // optional for styling
import Footer from "../../footer/footer";
import orchestra_happy from "../../../assets/orchestra_happy.png";
import Deepu_Karunakaran from "../../../assets/Deepu_Karunakaran.jpg";
import Kiran_R_Pai from "../../../assets/Kiran_R_Pai.jpg";
import drummer from "../../../assets/drummer.png";
import Sri_Rijesh_Gopalakrishnan from "../../../assets/Sri_Rijesh_Gopalakrishnan.jpg";
import Preyesh_Mampoyil_Kudiru_Parambu from "../../../assets/Preyesh_Mampoyil_Kudiru_Parambu.jpg";
import dances_india from "../../../assets/dances_india.png";
import orchestra_serious from "../../../assets/orchestra_serious.png";

// import ComingSoon from "../../coming_soon/coming_soon"; available full time

const Orchestra = () => {
  React.useEffect(() => {
    // Handle clicks outside of accordion
    function handleOutsideClick(e) {
      // Only close if click is outside any accordion or panel
      if (!e.target.closest(".accordion") && !e.target.closest(".panel")) {
        const allPanels = document.querySelectorAll(".panel");
        const allButtons = document.querySelectorAll(".accordion");

        // Close all panels and remove slide class
        allPanels.forEach((panel) => (panel.style.maxHeight = null));
        allButtons.forEach((button) => button.classList.remove("slide"));
      }
    }

    // Add click listener to document
    document.addEventListener("click", handleOutsideClick);

    // Cleanup on unmount
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  function handleClick(e) {
    e.stopPropagation(); // Prevent outside click handler from firing

    const button = e.currentTarget;
    const isOpen = button.classList.contains("slide");

    // Close all other panels first
    const allPanels = document.querySelectorAll(".panel");
    const allButtons = document.querySelectorAll(".accordion");

    allPanels.forEach((panel) => (panel.style.maxHeight = null));
    allButtons.forEach((btn) => btn.classList.remove("slide"));

    // If this panel wasn't open, open it
    if (!isOpen) {
      const panel = button.nextElementSibling;
      button.classList.add("slide");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  // const orchestraContent = (
  return (
    <div>
      <Navigation />

      <section className="main_title_bar">
        <h2 className="title_FAQ">The Four Musicians (Orchestra)</h2>
        <img
          className="musicians_group_photo_happy"
          src={orchestra_happy}
          alt="photo of 4 musicians at the show"
        ></img>
        <button className="accordion" onClick={handleClick}>
          Vocals - Sri.Deepu Karunakaran
        </button>
        <div className="panel">
          <p className="accordion-text">
            Biography of Deepu Karunakaran
            <br />
            <img
              className="musician"
              src={Deepu_Karunakaran}
              alt="deepu vocalist"
            />
            <br />
            Melodious Vocals by Deepu Karunakaran is a Diploma holder in
            Carnatic Music and Violin from the Kalakshetra Foundation. He
            started learning music at the age of 5 under Guru Janardhanan Potty.
            He has performed in many countries with leading Bharatanatyam
            artists as well as Kalakshetra artists. His strongest role is as a
            vocalist, and in this capacity, he has toured all over the world. He
            has been teaching Carnatic music to many students in India. He has
            won the Central Government Of India Scholarship for Classical Vocal
            from 2000 to 2002. He is also a recipient of the Vijayalakshmi
            Endowment award for the best supporting vocal of the year 2008 from
            Krishna Gana Sabha in Chennai. <br />
            Please join me in recognizing Sri Deepu Karunakaran <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Mridangam - Sri Kiran R. Pai
        </button>
        <div className="panel">
          <p className="accordion-text">
            Biography of Kiran R. Pai <br />
            <a
              href="https://www.instagram.com/kiran_r_pai/?hl=en"
              target="Kirans Social"
              rel="noopener no referrer"
            >
              {" "}
              @kiran_r_pai
            </a>{" "}
            <br />
            <img className="musician" src={Kiran_R_Pai} alt="deepu vocalist" />
            <br />
            Kiran R. Pai is a B-HIGH graded mridangam artist from All India
            Radio Chennai. He began his journey of learning mridangam from the
            institution Kalabhavan in Cochin. He later received advanced
            training from Sri. Balakrishna Kamath. He commenced his musical
            career in Chennai in the year 2011 from the reputed Kalakshetra
            Foundation under gurus Sri. K.P. Anilkumar and Sri. Gurubharadwaj,
            and completed his diploma along with Post Graduation from the
            University of Madras. Currently, he's pursuing mridangam under the
            guidance of Sri. Neyveli R. Narayanan. He has achieved awards for
            the Best Mridangam Accompaniment from the Spirit of Youth and the
            HCL Best Concert Award from the Music Academy. He also won the CCRT
            Scholarship for Junior Artists from the Ministry of Culture.
            <img
              className="drummer"
              src={drummer}
              alt="photo of Kiran drumming at show"
            ></img>
            <br />
            Please join me in recognizing Sri Kiran R. Pai.
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Violinist - Sri Rijesh Gopalakrishnan
        </button>
        <div className="panel">
          <p className="accordion-text">
            Biography of Sri Rijesh Gopalakrishnan
            <br />
            <img
              className="musician"
              src={Sri_Rijesh_Gopalakrishnan}
              alt="deepu vocalist"
            />
            <br />
            Sri Rijesh Gopalakrishnan started learning violin and vocals under
            the tutelage of his father Gopalakrishnan Cheruvila at the age of 4.
            He started performing at the age of 8 and simultaneously learned
            Tabala under Haris Bhai. Further, he moved to Chennai for advanced
            training in vocal and violin at the famous Kalakshetra Foundation,
            where he received his Diploma. Rijesh has been part of national and
            international festivals such as the Konark Festival, Soorya
            Festival, and Khajhraho Festival. He has visited countries such as
            Singapore, Malaysia, Japan, and the United States to name a few. He
            has also been performing for the past 20 years.
            <br />
            Please join me in recognizing Sri Rijesh Gopalakrishnan
            <br />
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Flautist - Sri Preyesh Mampoyil Kudiru Parambu
        </button>
        <div className="panel">
          <p className="accordion-text">
            Biography of Preyesh Mampoyil Kudiru Parambu
            <br />
            <img
              className="musician"
              src={Preyesh_Mampoyil_Kudiru_Parambu}
              alt="deepu vocalist"
            />
            <br />
            Preyesh Mampoyil Kudiru Parambu is a passionate Carnatic flautist
            and a disciple of Vidwan Shri Shailesh Ramamurthy. An alumnus of
            Chembai Memorial Government Music College, Palakkad, he represents
            the second generation of musicians in his family. His father was a
            renowned Mridangist, and his siblings are accomplished in classical
            dance and vocal music. Preyesh began vocal training at age 7 and
            later trained in flute under Shri Rajagopal, Shri Palakkad Krishna
            Iyer, and currently under Shri Shailesh Ramamurthy. He also learned
            Mridangam from his father and furthered it with Vidwans Shri
            Alappuzha Chandrashekaran Nair and Shri Cherthala S Dinesh, earning
            a diploma in the instrument. Preyesh has accompanied prominent dance
            artists like Kalakshetra Rajalakshmi and Kalamandalam Preetha
            Rajagopal. His solo performances include a 2022 recital at the
            Sharjah Festival and appearances at the Indian Pavilion in Global
            Village, Dubai. He also had the honor of performing with an Arabic
            band led by Mr. Khalil Ghadri. Beyond performing, Preyesh has
            composed several musical albums. He is currently based in the UAE
            and performs regularly in India and abroad. <br />
            <br />
            Please join me in recognizing Sri Preyesh Mampoyil Kudiru Parambu{" "}
            <br />
          </p>
        </div>
      </section>
      <div className="musician_container">
        <h1 className="title_orchestra">The History of Dance in India</h1>
        <div className="center-image">
          <img className="india__map" src={dances_india} />
        </div>
        <p className="accordion-text">
          <strong>
            {" "}
            The history of Indian dance is a rich tapestry woven with spiritual,
            cultural, and artistic traditions that span thousands of years. Its
            roots trace back to pre-Vedic times and are formalized in the Natya
            Shastra, an ancient Sanskrit treatise attributed to Bharata Muni,
            which laid the foundation for Indian classical dance and drama by
            defining essential elements like nritta (pure dance), nritya
            (expressive dance), and natya (dramatic storytelling). <br />
            <br />
            Traditionally, dance was a sacred offering performed in temples by
            devadasis, women who dedicated their lives to spiritual service
            through movement. Over time, distinct classical dance styles emerged
            across India, each reflecting regional culture, language, and
            devotion. <br />
            <br />
            There are eight officially recognized classical forms: Bharatanatyam
            (Tamil Nadu), Kathak (North India), Kathakali and Mohiniyattam
            (Kerala), Kuchipudi (Andhra Pradesh), Odissi (Odisha), Manipuri
            (Manipur), and Sattriya (Assam). Each style combines intricate
            gestures, facial expressions, rhythm, and costume to convey
            stories—often rooted in mythology and devotion. <br />
            <br />
            Alongside these classical styles, India’s folk and tribal dances add
            vibrant color and diversity, often performed during festivals,
            harvests, and community events. Dances like Bhangra and Giddha from
            Punjab, Garba and Dandiya from Gujarat, Lavani from Maharashtra,
            Ghoomar from Rajasthan, and Chhau from Eastern India reflect the
            everyday life, spirit, and joy of the people. <br />
            <br />
            In modern times, Indian dance has evolved with global influences,
            especially through the Indian film industry. Bollywood dance, for
            example, merges classical, folk, and Western styles into a
            high-energy, expressive form that has gained worldwide popularity.
            Contemporary Indian dancers often blend ballet, hip hop, and modern
            dance with traditional forms, creating new expressions of cultural
            identity. Today, Indian dance thrives not only on stage and screen
            but also in global classrooms and festivals, showcasing the
            country's profound artistic heritage. From sacred temple rituals to
            international performances, Indian dance continues to be a dynamic
            and powerful form of storytelling and expression.
          </strong>
        </p>
        <img
          className="orchestra_serious"
          src={orchestra_serious}
          alt="alternate photo of musicians at show"
        ></img>
      </div>
      <Navigation />
      <Footer />
    </div>
  );
  // return <ComingSoon message="Musician">{orchestraContent}</ComingSoon>;
};

export default Orchestra;

// // automatically makes the page available on Sat June21 2pm CST //
// if (new Date() < new Date("2025-06-21T00:14:00")) {
//   return <ComingSoon message={"Orchestra"} />;
// } else {}
//   return ()
