import './App.css'
import profilePic from './assets/aditya.jpg'

function App() {
  return (
    <div className="container">
      <div className='main-info'>
        <header>
          <h1>Personal Portfolio</h1>
        </header>
        
        <div className='details'>
          <div className='image-section'>
            <img src={profilePic} alt="Aditya Kamble" />
            <div className="status-badge">Available for Work</div>
          </div>

          <div className='info-section'>
            <h2>Aditya Kamble</h2>
            <p className="subtitle">Student & Aspiring Developer</p>
            
            <div className="stats">
              <div className="stat-item"><b>College</b> <br/> N.B.N.S.C.O.E.</div>
              <div className="stat-item"><b>Location</b> <br/> Solapur</div>
            </div>

            <div className='contact-list'>
              <p><span>📧</span> adityakamble@example.com</p>
              <p><span>📱</span> (123) 456-7890</p>
            </div>

            <div className="skills">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS3</span>
            </div>

            <button className="resume-btn">View Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
