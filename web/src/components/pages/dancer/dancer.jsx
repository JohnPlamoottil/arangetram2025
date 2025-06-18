import React from "react";
import { useSearchParams } from "react-router-dom";
import "./dancer.css"; // optional for styling
import Navigation from "../../navigation-links/navigation-links";

const Dancers = {
  Michelle: { bio: "bio", shishya: "message" },
};

const Dancer = () => {
  const [searchParams] = useSearchParams();

  const dancer = searchParams.get("dancer");

  const dancerInfo = Dancers[dancer];

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
      <section className="questions">
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
      </section>
      <h1>{dancerInfo.shishya}</h1>
      <h3>{dancerInfo.bio}</h3>
    </div>
  );
};

export default Dancer;

// copy paste section for the next dancer:
// <section className="questions">
//   <h2 className="title_Andrea">Michele Eapen</h2>
//   <button className="accordion" onClick={handleClick}>
//     ..
//   </button>
//   <div className="panel">
//     <p>
//       ..
//       <br />
//       ..
//     </p>
//   </div>
//   <button className="accordion" onClick={handleClick}>
//     ..
//   </button>
//   <div className="panel">
//     <p className="">
//       ..
//       <img className="" alt="auditorium" />
//     </p>
//   </div>
//   <button className="accordion" onClick={handleClick}>
//     ..
//   </button>
//   <div className="panel">
//     <p>..</p>
//     <p>..</p>
//     <p>..</p>
//   </div>
//   <button className="accordion" onClick={handleClick}>
//     ..
//   </button>
//   <div className="">
//     <p className="">..</p>
//     <div className=""></div>
//   </div>
//   <button className="accordion" onClick={handleClick}>
//     ..
//   </button>
//   <div className="panel">
//     <p>..</p>
//   </div>
// </section>
