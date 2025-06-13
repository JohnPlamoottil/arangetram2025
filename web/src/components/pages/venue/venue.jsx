import React from "react";
import Navigation from "../../navigation-links/navigation-links";
import "./venue.css";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Footer from "../../footer/footer";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const Venue = () => {
  return (
    <div className="venue_content">
      <Navigation />
      <div className="embedded_map">
        <APIProvider apiKey={apiKey}>
          <Map
            style={{ width: "1048x", height: "768px" }}
            zoom={15}
            center={{ lat: 42.354492334658644, lng: -88.01122761349113 }}
          />
          <Map
            style={{ width: "1048px", height: "768px" }}
            zoom={15}
            center={{ lat: 42.354492334658644, lng: -88.01122761349113 }}
          >
            <Marker
              position={{ lat: 42.354492334658644, lng: -88.01122761349113 }}
            />
          </Map>
        </APIProvider>
      </div>
      <Footer />
    </div>
  );
};

export default Venue;
