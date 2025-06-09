import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const Venue = () => {
  return (
    <div>
      <Navigation />;
      <APIProvider apiKey={apiKey}>
        <Map
          style={{ width: "500px", height: "500px" }}
          zoom={15}
          center={{ lat: 42.354492334658644, lng: -88.01122761349113 }}
        />
      </APIProvider>
    </div>
  );
};

export default Venue;
