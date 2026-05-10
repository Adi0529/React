import './Svg.css'
import aditya from '../assets/aditya.png'
export default function ProfileHexagon(){
  return (
    <div className="hex-wrapper me-5 p-5">
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="verticalHex" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0 L0.9,0.23 A0.1,0.1 0 0,1 0.95,0.32 L0.95,0.68 A0.1,0.1 0 0,1 0.9,0.77 L0.5,1 L0.1,0.77 A0.1,0.1 0 0,1 0.05,0.68 L0.05,0.32 A0.1,0.1 0 0,1 0.1,0.23 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="hexagon-outer">
        <img 
          src={aditya} 
          alt="Profile" 
          className="hexagon-image mb-5 me-3" 
        />
      </div>
    </div>
  );
};
