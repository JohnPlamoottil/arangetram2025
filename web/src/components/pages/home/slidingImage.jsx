import "./SlidingImage.css";
import tillana from "../../../assets/tillana.png"; // adjust path

function SlidingImage() {
  return (
    <div className="image-wrapper">
      <img src={tillana} alt="Sliding In" className="slide-in" />
    </div>
  );
}

export default SlidingImage;
