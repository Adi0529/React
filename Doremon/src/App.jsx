import './App.css'
import Characters from './components/Characters'
import Gallary from './components/Gallary'
import Header from './components/Header'
import Info from './components/info'
import Timeline from './components/Timeline'

function App() {

  return (
    <>
      <div className='main'>
      <Header title="Doraemon" />
      <Gallary />
      <Info/>
      <Characters />
      <Timeline />
      <Header title="Created by Aditya" />
      </div>
    </>
  )
}

export default App
