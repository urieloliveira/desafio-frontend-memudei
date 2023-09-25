import './App.css'
import WeatherSearch from './Components/WeatherSearch'

function App() {


  return (
    <>
    <div className="flex flex-col  h-screen">
      <div className='m-8 '>
      <h1 className='text-white text-6xl text-start font-semibold px-6'>Previsão do tempo</h1>
      </div>
      <WeatherSearch></WeatherSearch>
    </div>
    </>
  )
}

export default App
