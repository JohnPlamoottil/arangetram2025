import "./App.css";
import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <main style={{ padding: "1rem" }}>
          <p>Bharatanatyam Journey: Reflection 2018-2025</p>
        </main>
      </div>
      <h1>Andrea Thomas, Jana Scaria, Michelle Eapen,</h1>
      <h1>Rose Thomas, Jenna Plamoottil, & Amarya Koola</h1>
      <div className="card">
        <button></button>
        <p></p>
        <Footer />
      </div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
