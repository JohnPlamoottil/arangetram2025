import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./program.css"; // optional for styling
import Footer from "../../footer/footer";

const Program = () => {
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
            Program Schedule (Repertoire) <br />
            Seating Promptly Begins at 3:30pm CST
          </h2>
          <button className="accordion_program" onClick={handleClick}>
            Master of Ceremony (M.C.) Introductions <br />
          </button>
          <div className="panel_program">
            <p>
              Good evening everyone. I am MC1, one of the MCs of the evening. In
              5 minutes, we will be starting the 'Samarpanam 2025' function.
              Everyone please take your seats now so we can start the program at
              4:00pm. The doors will be closed at 4pm and we request that
              everyone be seated during the program to avoid any disruption. We
              also ask that you please silence your cell phones as it will also
              be a disruption to the program. Coffee will be available in the
              Hallway by 5pm. Please be sure to grab a brochure on your way in.
            </p>
            <p>
              Good evening everyone. I am MC2, one of the MCs of the evening. In
              5 minutes, we will be starting the 'Samarpanam 2025' function.
              Everyone please take your seats now so we can start the program at
              4:00pm. The doors will be closed at 4pm and we request that
              everyone be seated during the program to avoid any disruption. We
              also ask that you please silence your cell phones as it will also
              be a disruption to the program. Please move towards the center of
              the auditorium so that those who are coming late can quikly be
              seated. Coffee will be available in the Hallway by 5pm. Please be
              sure to grab a brochure on your way in.
            </p>
          </div>
          <button className="accordion_program" onClick={handleClick}>
            Welcome Message - Promptly Begins @ 4:00pm
          </button>
          <div className="panel_program">
            <p>
              Respected Priests, Invited Guests, Family and Friends, I welcome
              you all to the eagerly awaited "SAMARPANAM 2025" Bharathanatyam
              Arangetram of 6 talented young dancers - Amarya Koola, Andrea
              Jeril Thomas, Jana Scaria, Jenna Plamoottil, Michele Eapen & Rose
              Thomas - which is being held under the guidance of Smt. Jinoo
              Varghese, the artistic director of Soorya Dance School. These
              young girls have worked very hard to achieve their dreams and this
              was possible only because of the love and unwavering support of
              their parents. <br />I would like to invite the parents of the
              dancers to the stage ... <br />
              the parents of Andrea - Jeril and Shipla Thomas ,
              <br />
              the parents of Jana - Santosh and Lija Scaria , <br />
              the parents of Michelle - Priyan & Jincy Eapen , <br />
              the parents of Rose - Bejoy and Marisa Thomas , <br />
              the parents of Jenna - John and Leena Plamoottil , <br />
              the parents of Amarya - John and Latha Chirayil Koola <br />
              Thank you to all of the parents for all of your hardwork. For any
              function, the presence of priests is important for God's blessing.
              I respectfully invite Rev. Fr. - , to the stage to bless this
              occasion. I would like to invite Rev. Fr. - to offer a short
              prayer. I would like to invite Reverend Vicar for the welcome
              address on behalf of the parents.
            </p>
          </div>
          <button className="accordion_program" onClick={handleClick}>
            Few Announcements
          </button>
          <div className="panel_program">
            <p>Thank you Achens for your blessings on this occassion.</p>
            <p>
              Today's program will be completed in 3.5 hours with a 10 minute
              break during the program. Coffee and refreshments are available
              outside in the hallway. Dinner will be served at the conculsion of
              the program. Please note that food and beverages are not allowed
              in the auditorium. Please move towards the center of the
              auditorium so that those who are coming late can quikly be seated.
              Without any further delay we are starting the program. Our 6
              dancers have worked very hard for the past 4 years for this big
              day, please encourage them at every opportunity. We hope that you
              enjoy the program.
            </p>
          </div>
          <button className="accordion_program" onClick={handleClick}>
            Introducing the Instructor
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
          <button className="accordion_program" onClick={handleClick}>
            Introducing the Musicians
          </button>
          <div className="panel_program">
            <p>
              I would like to put the spotlight on the musicians, who are the
              glue holding the performance together. The musical accompaniment
              transforms the dance and elevates the audience to a higher
              dimension. <br />
              The musicians for the evening are: <br />
              Nattuvangam - Smt. Jinoo Varghese <br />
              <span className="program__Vocals">
                Vocals - Sri.Deepu Karunakaran{" "}
              </span>
              <br />
              Melodious Vocals by Sri Deepu Karunakaran is a Diploma holder in
              Carnatic Music and Violin from Kalakshetra Foundation. He started
              learning music at the age of 5 under Guru Janardhanan Potty.
              Further learned Vocal from Later under Late Shri Vairamangalam. S.
              Lakshminarayanan,Violin from Shri. Pakkala Ramadas, Lec in
              Kalakshetra. He has performed with the most eminent Indian
              Classical Dancers such as the Dhananjayans, Leela Samson, Prof.C.V
              Chandrasekhar, Priyadarshini Govind, Sreelatha Vinod, Shobhana,
              Sheejith Krishna, Shijith Nambiar, Kiran Subrahmanyam. He has
              performed in many countries with leading bharatanatyam artistes as
              well as Kalakshetra artistes. His strongest role is as a vocalist,
              and in this capacity he has toured all over the world. He has been
              teaching Carnatic music for many students in India. He has won the
              Central Government Of India Scholarship for Classical Vocal, in
              the year 2000-2002. Recipient of the Vijayalakshmi Endowment award
              for the best supporting vocal of the year 2008 from Krishna Gana
              Sabha, Chennai Please join me in recognizing Sri Deepu Karunakaran{" "}
              <br />
              Mridangam - Sri Kiran R. Pai <br />
              Violin - Sri Rijesh Gopalakrishnan <br />
              Flute- Sri Preyesh Mampoyil Kudiru Parambu <br />I request the
              musicians to start the performance with a prayer song. Thank You!
            </p>
            <p>
              Lets welcome the dancers to introduce their first item of this
              Arangetram recital
            </p>
          </div>

          <button className="accordion_program" onClick={handleClick}>
            Pushpanjali - Group Dance <br />
            4:30 -4:38pm
            <br />
          </button>
          <div className="panel_program">
            <p>
              Ragam - Tillang <br />
              Talam - Adi <br />
              Musician - Sri Gurubya Namaha
            </p>
            <p>
              Namaskaram, On behalf of Soorya Dance School and our teacher
              Smt.Jinoo Varghese, I take immense pleasure in presenting to you
              today - Samarpanam. We commence our Arangetram with a
              ‘Pushpanjali’ - The word ‘Anjali’ means ‘an offering’, Pushpanjali
              is an offering of flowers by the dancer. It is an invocation piece
              done at the beginning of a performance. This item is unique as
              this is in praise of Mother Mary, as we humbly seek your blessings
              for a smooth performance today, as we come to you for guidance and
              knowledge.
            </p>
            <p>
              Pushpanjali, meaning “offering of flowers,” is the traditional
              invocatory piece that begins a Bharatanatyam Margam. In this item,
              the dancer offers flowers as a mark of respect to the deity, the
              guru, the musicians, and the audience. Set to a lively rhythm,
              Pushpanjali combines graceful movements and rhythmic footwork,
              invoking divine blessings for an auspicious beginning. It sets the
              tone for the performance that follows, symbolizing devotion,
              humility, and the dancer’s readiness to embark on a sacred
              artistic journey.
            </p>
            <p>
              Pushpanjali, meaning “offering of flowers,” is the traditional
              invocatory piece that begins a Bharatanatyam Margam. In this item,
              the dancer offers flowers as a mark of respect to the deity, the
              guru, the musicians, and the audience. Set to a lively rhythm,
              Pushpanjali combines graceful movements and rhythmic footwork,
              invoking divine blessings for an auspicious beginning. It sets the
              tone for the performance that follows, symbolizing devotion,
              humility, and the dancer’s readiness to embark on a sacred
              artistic journey. <br />
            </p>
          </div>

          <button className="accordion_program" onClick={handleClick}>
            Solo 1 - Andrea Jeril Thomas
          </button>
          <div className="panel_program">
            <p></p>
          </div>
          <button className="accordion_program" onClick={handleClick}>
            What do I wear?
          </button>
          <div className="panel_program">
            <p>
              The host typically wears traditional Indian wear. The guest can
              wear formal, semi-formal or business attire.
            </p>
          </div>
          <button className="accordion_program" onClick={handleClick}>
            What do I bring?
          </button>
          <div className="panel_program">
            <p>
              Your prescence is the greatest gift to the hosts. In some events,
              a non-profit cause is designated by the performer. You may choose
              to donate to that cause but there is no obligation to do so.
            </p>
          </div>
          <button className="accordion_program" onClick={handleClick}>
            How long is each dance item?
          </button>
          <div className="panel_program">
            <p>
              Each dance item is roughly 10 minutes in duration. the"varnum"
              (centerpiece) is longer - closer to 40minutes. Overall, expect the
              program to last about 3 hours.
            </p>
          </div>
          <button className="accordion_program" onClick={handleClick}>
            Are there coffee breaks and intermission?
          </button>
          <div className="panel_program">
            <p>
              There are short breaks between dance items. There are two larger
              breaks for costume changes after 2 to 3 dance items.
            </p>
          </div>
          <button className="accordion_program" onClick={handleClick}>
            Can I leave early if I have other commitments?
          </button>
          <div className="panel_program">
            <p>
              We would love for you to stay for the whole program and join us
              for dinner. However, we understand if you have to leave earlier.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Program;
