import './App.css'
import maratha from './assets/maharaj.jpg'
import Activity from './Components/activity'
import Seal from './Components/Seal'
import raj from './assets/raj.jpg'

function App() {

  return (
    <>
      <h1 className='text-center fw-bolder p-4 m-0 mb-3 text-warning bg-dark'>Chhatrapati Shivaji Maharaj</h1>
      <div className='d-flex flex-row justify-content-center'>
        <img src={maratha} alt="Chhatrapati Shivaji Maharaj" />
      </div>
      <h2 className='text-center fw-bolder p-4 text-light'>Shivaji Shahaji Bhonsale</h2>
      <p className='container mt-0 mb-0 pt-0 py-5 content text-center'>
        Chhatrapati Shivaji Maharaj was a great Maratha warrior and the founder of the Maratha Empire in western India in the 17th century. He was born on February 19, 1630, in the hill-fort of Shivneri, near Pune, Maharashtra. Shivaji Maharaj is known for his military prowess, administrative skills, and his efforts to establish a strong and independent Maratha kingdom. He was a skilled strategist and a brilliant military leader who successfully resisted the Mughal Empire's attempts to expand into his territory. Shivaji Maharaj is also remembered for his progressive policies, including the promotion of Marathi culture and language, and his efforts to protect the rights of his subjects. He was crowned as the Chhatrapati (king) in 1674 and continued to expand his empire until his death in 1680. Shivaji Maharaj is revered as a hero and a symbol of Maratha pride and resilience.

      </p>
      <Activity />
      <Seal />
      
      <h2 className='text-center fw-bolder p-4 text-light text-decoration-underline text-warning'>Shivaji's Legacy</h2>
      <div className='d-flex flex-row justify-content-center'>
        <img src={raj} alt="Shivaji's Raj" />
      </div>
      <p className='container mt-0 mb-0 pt-0 py-5 content text-center'>
        Shivaji's Raj was a period of great expansion and consolidation for the Maratha Empire. During this time, Shivaji Maharaj successfully expanded his territory through military conquests and strategic alliances. He established a strong administrative system and implemented various reforms to strengthen his kingdom. Shivaji's Raj was marked by his efforts to promote Marathi culture and language, as well as his commitment to protecting the rights of his subjects. He also built a powerful navy to protect his coastal territories and to challenge the dominance of the Mughal Empire in the region. Overall, Shivaji's Raj was a significant period in Indian history that laid the foundation for the Maratha Empire's future success.
      </p>
      <footer className='text-center fw-bolder p-4 text-warning bg-dark fs-2'>Created by Aditya Kamble</footer>
    </>
  )
}

export default App
