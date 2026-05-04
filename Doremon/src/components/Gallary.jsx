import group from "../assets/group.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g4 from "../assets/g4.jpg"; 
import g3 from "../assets/g3.jpg"; 
import "./Gallary.css";

export default function Gallary() {
  return (
    <>
    <div className="gallary row w-100 h-50 p-5 bg-warning">
      <div className="col-md-3 d-flex flex-column justify-content-between gap-5">
      <img src={g1} alt="Gallery Image 1" className="gal" />
      <img src={g3} alt="Gallery Image 3" className="gal" />
      </div>
      <img src={group} alt="Group Image"className="col-md-6 middle" />
      <div className="col-md-3 d-flex flex-column justify-content-between gap-5">
        <img src={g2} alt="Gallery Image 2" className="gal" />
        <img src={g4} alt="Gallery Image 4" className="gal" />
      </div>
    </div>
    </>
  );
}