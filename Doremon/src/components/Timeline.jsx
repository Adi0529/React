
import { timeline } from '../assets/Datamain.js';

const Timeline = () => {
  return (

    <section style={container}>
        <h2 className='text-center text-decoration-underline mb-4 fs-1'>Timeline</h2>
      <div style={wrapper}>
        <div style={connectorLine} />

        {timeline.map((item, index) => (
          <div key={index} style={nodeContainer}>
            
            <div style={yearLabel}>{item.year}</div>
            <div style={nodeDot}>
              <div style={innerDot} />
            </div>

            <div style={eventLabel}>{item.event}</div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

// --- STYLES ---

const container = {
  width: '100%',
  overflowX: 'auto',
  padding: '100px 50px',
};

const wrapper = {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: 'max-content',
};

const connectorLine = {
  position: 'absolute',
  top: '50%',
  left: '0',
  right: '0',
  height: '2px',
  backgroundColor: '#e5e7eb',
  transform: 'translateY(-50%)',
  zIndex: 0,
};

const nodeContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '200px',
  zIndex: 1,
  position: 'relative',
};

const yearLabel = {
  fontSize: '1.1rem',
  fontWeight: 'bold',
  color: '#111827',
  marginBottom: '12px',
};

const nodeDot = {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  border: '2px solid #3b82f6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '12px',
};

const innerDot = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#3b82f6',
};

const eventLabel = {
  fontSize: '0.9rem',
  color: '#4b5563',
  textAlign: 'center',
  maxWidth: '160px',
  lineHeight: '1.5',
};

export default Timeline;
