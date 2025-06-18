import React from "react";
import { useSearchParams } from "react-router-dom";
import "./dancer.css"; // optional for styling
import Navigation from "../../navigation-links/navigation-links";

const dancers = {
  andrea: { bio: "bio", shishya: "message" },
};

const Dancer = () => {
  const [searchParams] = useSearchParams();

  const dancer = searchParams.get("dancer");

  const dancerInfo = dancers[dancer];
  return (
    <div>
      <Navigation />
      <h1>{dancerInfo.shishya}</h1>
      <h3>{dancerInfo.bio}</h3>
    </div>
  );
};

export default Dancer;
