import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import ComingSoon from "../../coming_soon/coming_soon";
import "./program.css"; // optional for styling
import Footer from "../../footer/footer";
import varnum from "../../../assets/varnum.png";
import firedrill from "../../../assets/firedrill.png";
import audience from "../../../assets/audience.png";

const Program = () => {
  function handleClick(e) {
    const button = e.currentTarget; // use currentTarget to reliably get the button
    const panel = button.nextElementSibling;

    // Determine whether this panel is currently open
    const isOpen = button.classList.contains("slide");

    // Close all other panels and remove 'slide' class from other buttons
    const allButtons = document.querySelectorAll(".accordion_program");
    const allPanels = document.querySelectorAll(".panel_program");
    allButtons.forEach((b) => {
      if (b !== button) b.classList.remove("slide");
    });
    allPanels.forEach((p) => {
      if (p !== panel) p.style.maxHeight = null;
    });

    // Toggle the clicked panel
    if (isOpen) {
      button.classList.remove("slide");
      panel.style.maxHeight = null;
    } else {
      button.classList.add("slide");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  // const programContent = (
  return (
    <div>
      <Navigation />
      <section className="main_title_bar">
        <h2 className="title_Program">
          Program Schedule (Repertoire) <br />
          Doors will open at 3:30pm CST
        </h2>
        <p className="sidenote">
          We welcome you to come early and enjoy the decorations and to take
          pics in lobby before seating.
        </p>
        <button className="accordion_program" onClick={handleClick}>
          Master of Ceremony (M.C.) Introductions <br />
        </button>
        <div className="panel_program">
          <p>
            Good evening everyone. I am Brianna Chirayil (Megha), one of the MCs
            for this evening and I am Jasmine Vayalil, the other MC for this
            evening. <br />
            In 5 minutes, we will be starting the 'Samarpanam 2025' function.
            Everyone please take your seats now so we can start the program at
            4:00pm. The doors will be closed at 4pm and we request that everyone
            be seated during the program to avoid any disruption. We also ask
            that you please silence your cell phones as it will also be a
            disruption to the program. Coffee will be available in the Hallway
            by 5pm. Please be sure to grab a brochure on your way in and have
            your phone pulled up with this website as you can follow along the
            program on this page.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Welcome Message - Starts @ 4:00pm
        </button>
        <div className="panel_program">
          <p>
            Respected Priests, Invited Guests, Family and Friends, I welcome you
            all to the eagerly awaited "Samarpanam 2025" Bharathanatyam
            Arangetram of 6 talented young dancers - Amarya Koola, Andrea Jeril
            Thomas, Jana Scaria, Jenna Plamoottil, Michele Eapen & Rose Thomas -
            which is being held under the guidance of Smt. Jinoo Varghese, the
            artistic director of Soorya Dance School. <br />
            These young girls have worked very hard to achieve their dreams and
            this was possible only because of the love and unwavering support of
            their parents. <br />I would like to invite the parents of the
            dancers to the stage ... <br />
            the parents of Andrea - Jeril and Shilpa Thomas , <br />
            the parents of Jana - Santosh and Lija Scaria , <br />
            the parents of Michelle - Priyan & Jincy Eapen , <br />
            the parents of Rose - Bejoy and Marisa Thomas , <br />
            the parents of Jenna - John and Leena Plamoottil , <br />
            the parents of Amarya - John and Latha Chirayil Koola <br />
            Thank you to all of the parents for all of your hardwork. For any
            function, the presence of priests is important for God's blessing. I
            respectfully invite Rev. Fr.Jerry Mathew, Fr. Thomas Kadukappillil,
            and Fr. Joel Pius to the stage to bless this occasion. I would like
            to invite Rev. Fr.Jerry to offer a short prayer. I would like to
            invite Reverend Vicar Jerry Mathew for the welcome address on behalf
            of the parents.
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
            the program. Please note that food and beverages are not allowed in
            the auditorium. Please move towards the center of the auditorium so
            that those who are coming late can quikly be seated. Without any
            further delay we are starting the program. Our 6 dancers have worked
            very hard for the past 4 years for this big day, please encourage
            them at every opportunity. We hope that you enjoy the program.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Introducing the Instructor
        </button>
        <div className="panel_program">
          <p>
            Let us take a look at the talent that has gone into the creation of
            this beautiful performance. First, rhythmic beats of Nattuvangam by
            Smt. Jinoo Varghese - Smt Jinoo Varghese is an accomplished dancer
            and instructor of Bharatanatyam and is the Artistic Director of
            Soorya Dance School. She started learning dance at the age of 5
            under Guru Mohana Tulsi, further learned Bharatanatyam under
            Smt.Girija Chandran. She is the recipient of the merit scholarship
            from CCRT, New Delhi in the field of Bharatanatyam. She has worked
            closely with many eminent gurus in India on their productions all
            over India. She has performed as a soloist at prestigious venues
            receiving critical acclaim. As a choreographer, she has created
            numerous short works and evening-length productions. Through her
            dance academy, Soorya Dance school at Northbrook, IL, she is able to
            put her passion for dance into action. Please join me in recognizing
            Smt. Jinoo Varghese. <br />
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Introducing the Musicians
        </button>
        <div className="panel_program">
          <p>
            I would like to put the spotlight on the musicians, who are the glue
            holding the performance together. The musical accompaniment
            transforms the dance and elevates the audience to a higher
            dimension. <br />
            I request the musicians to start the performance with a prayer song.
            Thank You! <br />
            The musicians for the evening are: <br />
            Nattuvangam - Smt. Jinoo Varghese (Guru/Instructor)
            <br />
            Vocals - Sri.Deepu Karunakaran <br />
            Mridangam - Sri Kiran R. Pai <br />
            Violin - Sri Rijesh Gopalakrishnan <br />
            Flute - Sri Preyesh Mampoyil Kudiru Parambu <br />
          </p>
          <p className="refer">
            Please refer to the Musician Page to view each of their biography.
          </p>
          <p>
            Lets welcome the dancers to introduce their first item of this
            Arangetram recital
          </p>
        </div>

        <button className="accordion_program" onClick={handleClick}>
          Pushpanjali - Group Dance <br />
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
            today - Samarpanam. We commence our Arangetram with a ‘Pushpanjali’
            - The word ‘Anjali’ means ‘an offering’, Pushpanjali is an offering
            of flowers by the dancer. It is an invocation piece done at the
            beginning of a performance. This item is unique as this is in praise
            of Mother Mary, as we humbly seek your blessings for a smooth
            performance today, as we come to you for guidance and knowledge.
          </p>
          <p>
            Pushpanjali, meaning “offering of flowers,” is the traditional
            invocatory piece that begins a Bharatanatyam Margam. In this item,
            the dancer offers flowers as a mark of respect to the deity, the
            guru, the musicians, and the audience. Set to a lively rhythm,
            Pushpanjali combines graceful movements and rhythmic footwork,
            invoking divine blessings for an auspicious beginning. It sets the
            tone for the performance that follows, symbolizing devotion,
            humility, and the dancer’s readiness to embark on a sacred artistic
            journey. <br />
          </p>
        </div>

        <button className="accordion_program" onClick={handleClick}>
          Solo 1 - Andrea Jeril Thomas
        </button>
        <div className="panel_program">
          <p>
            [Megha] Next will be a solo presentation by Andrea Jerril Thomas.{" "}
            <br />
            First, I would like to invite .... onto the stage to say a few
            words.
            <br />
            Let us watch Andrea's solo performance. <br />
            [Jasmine] - Next item is ‘Sada shiva Kavuthuvam’, Kauthuvams are
            traditional invocatory pieces performed in praise of a deity,
            blending rhythmic syllables with expressive storytelling. In this
            item, the dancer offers reverence to Lord Sadashiva, the eternal and
            auspicious form of Shiva — the cosmic dancer, creator, and
            destroyer. Through dynamic movements, precise rhythm, and powerful
            abhinaya, this piece invokes Lord Shiva’s grace and grandeur,
            celebrating his divine energy and timeless presence in the universe.
            Ragam: Kalyani & Talam: Sankeerna Jathi triputa talam
          </p>
          <p>
            Ragam: Kalyani <br />
            Talam: Sankeerna Jathi triputa talam <br />
            ‘Sada Shiva Kavuthuvam’, Kauthuvams are traditional invocatory
            pieces performed in praise of a deity, blending rhythmic syllables
            with expressive storytelling. In this item, the dancer offers
            reverence to Lord Sadashiva, the eternal and auspicious form of
            Shiva — the cosmic dancer, creator, and destroyer. Through dynamic
            movements, precise rhythm, and powerful abhinaya, this piece invokes
            Lord Shiva’s grace and grandeur, celebrating his divine energy and
            timeless presence in the universe.
          </p>
        </div>

        <button className="accordion_program" onClick={handleClick}>
          Solo 2 - Jana Scaria
        </button>
        <div className="panel_program">
          <p>
            [Megha] Next will be a solo presentation by Jana Scaria. First, I
            would like to invite .... onto the stage to say a few words. Let us
            watch Jana's solo performance. <br />
            [Jasmine] ‘Esther’ is a Padam based on the biblical story of Esther,
            the beautiful Jewish queen. The dancer describes the story where
            Esther asks the king to a dinner party. The king was happy and
            granted her a wish, Esther reveals her true purpose and explains
            Haman's wicked plan to destroy her and her people. The King ordered
            to execute Haman on the gallows he built for Mordecai. The Story of
            Esther emphasizes the power of God, instructing us we should use his
            blessings to help others. Orchestra plays Ragam
          </p>
          <p>
            Ragam: Ragamalika <br />
            Talam: Adi <br />
            ‘Esther’ is a Padam based on the biblical story of Esther, the
            beautiful Jewish queen. The dancer describes the story where Esther
            asks the king to a dinner party. The king was happy and granted her
            a wish, Esther reveals her true purpose and explains Haman's wicked
            plan to destroy her and her people. The King ordered to execute
            Haman on the gallows he built for Mordecai. The Story of Esther
            emphasizes the power of God, instructing us we should use his
            blessings to help others.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Solo 3 - Michelle Eapen
        </button>
        <div className="panel_program">
          <p>
            [Megha] Next will be a solo presentation by Michelle Eapen. First, I
            would like to invite .... onto the stage to say a few words. Let us
            watch Michelle's solo performance. <br />
            [Jasmine] - ‘Durge Durge Jaya Jaya Durge’ appears to be a devotional
            phrase in Sanskrit dedicated to the goddess Durga, a Hindu deity
            symbolizing strength and protection. The words “Durge Durge” invoke
            the name of Durga twice, emphasizing her power. “Jaya Jaya”
            translates to “victory, victory,” praising her triumph. This phrase
            is commonly chanted during festivals like Navaratri, where Durga is
            celebrated for her victory over evil. The repetition of her name and
            the phrase’s meaning emphasize devotion and reverence. Orchestra
            plays Ragam
          </p>
          <p>
            Ragam: Revathi <br />
            Talam: Adi <br />
            ‘Durge Durge Jaya Jaya Durge’ appears to be a devotional phrase in
            Sanskrit dedicated to the goddess Durga, a Hindu deity symbolizing
            strength and protection. The words “Durge Durge” invoke the name of
            Durga twice, emphasizing her power. “Jaya Jaya” translates to
            “victory, victory,” praising her triumph. This phrase is commonly
            chanted during festivals like Navaratri, where Durga is celebrated
            for her victory over evil. The repetition of her name and the
            phrase’s meaning emphasize devotion and reverence.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Varnum -Group Dance
        </button>
        <div className="panel_program">
          <p>
            [Megha] This Varnam is a tribute to Kerala — a land shaped by
            legend, where sage Parasurama is believed to have reclaimed the
            earth from the sea. Through graceful movements and expressive
            storytelling, the dancer explores Kerala’s natural beauty, spiritual
            harmony, and rich cultural heritage. <br />
            [Jasmine]The piece celebrates the state’s classical art forms,
            including the dramatic elegance of Kathakali and the gentle grace of
            Mohiniyattam, capturing the vibrant soul of God’s Own Country.{" "}
            <br />
            Ragam: Ragamalika <br />
            Talam: Adi <br />
            This Varnam is a tribute to Kerala — a land shaped by legend, where
            sage Parasurama is believed to have reclaimed the earth from the
            sea. Through graceful movements and expressive storytelling, the
            dancer explores Kerala’s natural beauty, spiritual harmony, and rich
            cultural heritage. The piece celebrates the state’s classical art
            forms, including the dramatic elegance of Kathakali and the gentle
            grace of Mohiniyattam, capturing the vibrant soul of God’s Own
            Country
          </p>
          <img
            className="varnum_group_performance"
            src={varnum}
            alt="photo from actual performance"
          ></img>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Intermission
        </button>
        <div className="panel_program">
          <p>
            Megha announces coffee break <br />
            We will now take a 10 minute coffee break. Coffee is available
            outside of the theater. Please do not bring food or drink into the
            auditorium. Please be back by in the auditorium by 6:10. Thank you.{" "}
            <br />
            Jasmine announces short intermission <br />
            We are now half way done with our program. I request everyone to be
            seated and to not exit while the program is still going on (unless
            it is an emergency ). Continuous movement will cause much
            disturbance for the audience trying to watch the program. We will
            now resume the program.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Musical Interlude / Fire Alarm
        </button>
        <div className="panel_program">
          <p>Next is a musical interlude 6:21-6:25pm</p>
          <img
            className="firedrill"
            src={firedrill}
            alt="photo showing front of CLC due to firedrill lasting 2.5hrs"
          ></img>
          <p>
            {" "}
            During the speeches for Rose Thomas, Sania was interrupted by a
            firedrill which lasted for about two and half hours because a pipe
            bursted in the mens restroom located in a separate building on
            campus
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Solo 4 - Rose Thomas
        </button>
        <div className="panel_program">
          <p>
            [Megha] Next will be a solo presentation by Rose Thomas. First, I
            would like to invite .... onto the stage to say a few words. <br />
            [Jasmine] Let us watch Rose's solo performance. <br />
            Pradosha Samayadi’ is a vibrant composition that describes the dance
            of Lord Shiva during Pradosha Samaya (bimonthly occasion on the
            thirteenth day of every fortnight in the Hindu calendar).The
            composer describes His Tandava in a very spectacular way and talks
            about how Nandi plays the Mridangam and Lord Ganesha plays the
            Nattuvangam and Lord Shiva dances Blissfully. Goddess Parvathi also
            enjoys his dance.
          </p>
          <p>
            Ragam: Purvi Kalyani <br />
            Talam: Adi <br />
            ‘Pradosha Samayadi’ is a vibrant composition that describes the
            dance of Lord Shiva during Pradosha Samaya (bimonthly occasion on
            the thirteenth day of every fortnight in the Hindu calendar).The
            composer describes His Tandava in a very spectacular way and talks
            about how Nandi plays the Mridangam and Lord Ganesha plays the
            Nattuvangam and Lord Shiva dances Blissfully. Goddess Parvathi also
            enjoys his dance.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Solo 5 - Jenna Plamoottil
        </button>
        <div className="panel_program">
          <p>
            [Megha] Next will be a solo presentation by Jenna Plamoottil. <br />
            First, I would like to invite .... onto the stage to say a few
            words.
            <br />
            [Jasmine] Let us watch Jenna's solo performance. <br />
            ‘Magdalena Mariam’, is based on a renowned Malayalam poem by
            Mahakavi Vallathol Narayana Menon. It portrays a powerful moment
            from Mary Magdalene’s life — from being condemned as a sinner to
            finding redemption. As she is brought before Jesus to be stoned, He
            responds with compassion, urging the crowd that only one without sin
            may cast the first stone. The piece ends with Mary’s heartfelt
            repentance at His feet, symbolizing forgiveness, grace, and
            transformation.
          </p>
          <p>
            Ragam: Ragamalika <br />
            Talam: Adi <br />
            ‘Magdalena Mariam’, is based on a renowned Malayalam poem by
            Mahakavi Vallathol Narayana Menon. It portrays a powerful moment
            from Mary Magdalene’s life — from being condemned as a sinner to
            finding redemption. As she is brought before Jesus to be stoned, He
            responds with compassion, urging the crowd that only one without sin
            may cast the first stone. The piece ends with Mary’s heartfelt
            repentance at His feet, symbolizing forgiveness, grace, and
            transformation.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Solo 6 - Amarya Koola
        </button>
        <div className="panel_program">
          <p>
            [Jasmine] Next will be a solo presentation by Amarya Koola. <br />
            First, I would like to invite .... onto the stage to say a few
            words.
            <br />
            [Megha] Let us watch Amarya's solo performance. <br />
            ‘Tarangam’ means waves and features stories from Lord Krishna’s life
            — his childhood, playful pranks, and marriage to Rukmini. This piece
            highlights Krishna’s divine beauty and the deep love of the gopis.
            It portrays the story of Krishna’s headache being cured by the dust
            of Radha’s feet, symbolizing her pure, selfless devotion.
          </p>
          <p>
            Ragam: Ragamalika <br />
            Talam: Adi <br />
            ‘Tarangam’ means waves and features stories from Lord Krishna’s life
            — his childhood, playful pranks, and marriage to Rukmini. This piece
            highlights Krishna’s divine beauty and the deep love of the gopis.
            It portrays the story of Krishna’s headache being cured by the dust
            of Radha’s feet, symbolizing her pure, selfless devotion.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Thillana - Group Dance
        </button>
        <div className="panel_program">
          <p>
            [Megha] Next is a musical interlude <br />
            [Jasmine] We have come to the last item of today's performance.{" "}
            <br />
            Let's hear the details of this item directly from the dancers. To
            conclude today’s arangetram recital we will be presenting Thillana.
            ‘Thillana’, is a vibrant finale to a Bharatanatyam performance. This
            thillana is in praise of Lord Shiva that combines the idea of
            Bhakthi rasa. After the thillana, a short prayer is offered known as
            'Mangalam', which seeks divine blessings for the well-being of
            everybody. Thillana
          </p>
          <p>
            Ragam: Atana <br />
            Talam: Adi <br />
            ‘Thillana’, is a vibrant finale to a Bharatanatyam performance. This
            thillana is in praise of Lord Shiva that combines the idea of
            Bhakthi rasa.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Mangalam
        </button>
        <div className="panel_program">
          <p>
            A short prayer seeking divine blessings for the well-being of
            everyone.
          </p>
        </div>
        <button className="accordion_program" onClick={handleClick}>
          Vote of Thanks
        </button>
        <div className="panel_program">
          <p>
            [Jasmine] I would like to invite the Guru of the artists and the
            Artistic Director of Soorya Dance School, Smt. Jinoo Varghese, to
            the stage <br />
            [Jinoo] Vote of Thanks, Gift presentations (musicans) and plaque
            presentations to the dancers. Gift presentations.... <br />
            [Megha] Thank you all for being such a great audience. We would like
            to extend our Thanks to the College of Lake County for this
            excellent theatre and a special thanks to the team for their
            excellent support. Thank you, and have a good night!
          </p>
        </div>
      </section>
      <img className="audience" src={audience} alt="audience group photo"></img>
      <Navigation />
      <Footer />
    </div>
  );
  // return (
  // <ComingSoon message="Program (Repertoire)">{programContent}</ComingSoon>
  // );
};

export default Program;

// // automatically makes the page available on Sat June21 2pm CST //
//   if (new Date() < new Date("2025-06-21 T14:00:00")) {
//     return <ComingSoon message={"Program"} />;
//   } else {}
//     return ()
