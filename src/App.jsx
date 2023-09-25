import './App.css'
import WeatherSearch from './Components/WeatherSearch'
import Capitais from './Components/Capitais'

function App() {


  return (
    <>
    <div className="flex flex-col  h-screen">
      <div className='m-8 '>
      <h1 className='text-white text-6xl text-left font-semibold px-5'>Previsão do tempo</h1>
      </div>
      <WeatherSearch></WeatherSearch>
      <Capitais></Capitais>
    </div>
    </>
  )
}

export default App