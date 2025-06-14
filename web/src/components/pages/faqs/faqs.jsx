import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./faqs.css";
import Footer from "../../footer/footer";
import margam from "../../../assets/margam.png";

const FAQs = () => {
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
  // first off theres is an eventhandler called handle click that will handle any clickEvent on the button on the page
  // now the function takes in an event as a function,
  // this is how we make the page dynamic
  return (
    <div>
      <Navigation />;
      <section className="questions">
        <h2 className="title_FAQ">Frequently Asked Questions (FAQs)</h2>
        <button className="accordion" onClick={handleClick}>
          What is Bharatanatyam?
        </button>
        <div className="panel">
          <p>
            Bharatanatyam is one of the most ancient forms of classical Indian
            dances, expressed through Nritta (rhythmic movements), Nritya
            (expression), and Natya (mime). It is a classical dance style from
            South India known for its grace, rhythm, and sculpturesque poses.
            This classical dance had its origins thousands of years ago in the
            Natya Sastra, a comprehensive guide to the intricacies of dance,
            drama and music written by the sage Bharata. In the word Bharata are
            the three components of the dance: Bha for Bhava (expression), Ra
            for Raaga (melody), and Ta for Taala (rhythm). Bharatanatyam is
            unique in its use of geometric precision, rhythmic complexity, and a
            distinctive language of gestures. By combining these elements with
            music, Bharatanatyam expresses the yearning of the human soul for
            union with the eternal.
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          What is an Arangetram?
        </button>
        <div className="panel">
          <p>
            Arangetram is a Tamil word, which means the ‘etram’ or ascending on
            the ‘arangam’ or performance on stage by a dancer. In this
            concert-length solo recital to the public, a dancer presents a full
            repertoire of dances (Maargam), demonstrating extensive knowledge of
            the art form through a variety of pieces, keeping a balance between
            “nritta and nritya”. To reach this juncture in the career of a
            dancer requires years of intense and rigorous training. The
            Arangetram is the first step in the transition from an amateur to a
            professional dancer. This dance is a debut performance of a dance
            form given by a student who has trained for many years.
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          What do I wear?
        </button>
        <div className="panel">
          <p>
            The host typically wears traditional Indian wear. The guest can wear
            formal, semi-formal or business attire.
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          What do I bring?
        </button>
        <div className="panel">
          <p>
            Your prescence is the greatest gift to the hosts. In some events, a
            non-profit cause is designated by the performer. You may choose to
            donate to that cause but there is no obligation to do so.
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          How long is each dance item?
        </button>
        <div className="panel">
          <p>
            Each dance item is roughly 10 minutes in duration. the"varnum"
            (centerpiece) is longer - closer to 40minutes. Overall, expect the
            program to last about 3 hours.
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Are there coffee breaks and intermission?
        </button>
        <div className="panel">
          <p>
            There are short breaks between dance items. There are two larger
            breaks for costume changes after 2 to 3 dance items.
          </p>
        </div>
        <button className="accordion" onClick={handleClick}>
          Can I leave early if I have other commitments?
        </button>
        <div className="panel">
          <p>
            We would love for you to stay for the whole program and join us for
            dinner. However, we understand if you have to leave earlier.
          </p>
        </div>
      </section>
      <img className="margam" src={margam} alt="group center"></img>
      <div className="faq-form">
        <p className="faq-instructions">
          If you have any more questions concerning the event, please send them
          using the form below:
        </p>
        <p className="faq-instructions">
          We’ll update the site with the answer.
        </p>

        <form>
          <label className="form_question">
            Question*
            <textarea className="faq-textarea" name="question" required />
          </label>

          <div className="contact">
            <label className="form_name">
              Name* <input type="text" name="name" required />
            </label>

            <label className="form_email">
              Email* <input type="email" name="email" required />
            </label>
          </div>

          <button className="form_submit" type="submit">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
