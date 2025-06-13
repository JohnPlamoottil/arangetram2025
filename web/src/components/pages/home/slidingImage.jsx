import "./slidingImage.css";
import green_varnum_corner from "../../../assets/green_varnum_corner.png"; // adjust path

function SlidingImage() {
  return (
    <div className="image-wrapper">
      <img src={green_varnum_corner} alt="Sliding In" className="slide-in" />
    </div>
  );
}

export default SlidingImage;
