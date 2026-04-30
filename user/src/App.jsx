import './App.css'
import Profile from './Component/Profile.jsx'
import Button from './Component/Button.jsx';
import Main from './Component/main.jsx';

function App() {

  return (
    <>
     <h1 className='bg-dark text-light text-center p-3'>Simple react app</h1>
     <div className="container">
     <p className='my-3 text-center'>Welcome to your simple React app!</p>
     <p className='my-3 text-center'>This app is designed to demonstrate the basics of React development. It includes a simple user profile component that displays user information such as name, bio, location, phone number, and email address.</p>
     </div>
     <div className="container">
       <div className="row g-3 main justify-content-center">
         <div className="col-md-4 sub me-4">
           <Profile first="John" last="Doe" bio="A passionate software engineer with a love for coding and problem-solving." location="New York, USA" phone="+1 234 567 890" email="john.doe@example.com" />
         </div>
         <div className="col-md-4 sub me-4">
           <Profile first="Jane" last="Smith" bio="A creative designer with a passion for visual arts and user experience." location="Los Angeles, USA" phone="+1 987 654 321" email="jane.smith@example.com" />
         </div>
         <div className="col-md-4 sub">
           <Profile first="Alice" last="Johnson" bio="A dedicated project manager with a knack for organization and team collaboration." location="Chicago, USA" phone="+1 555 123 456" email="alice.johnson@example.com" />
         </div>
       </div>
     </div>
      <Main />

     <div className='container d-flex flex-row justify-content-center'>
     <Button buttonname="Click me" />
     <Button buttonname="Log in" />
     <Button buttonname="Sign up" />
     <Button buttonname="Submit" />
     </div>
    <footer className='bg-dark text-light text-center p-3 mt-5'>@Aditya Kamble</footer>
    </>
  )
}

export default App
