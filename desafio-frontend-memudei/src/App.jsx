import './App.css'

import WeatherComponent from './components/WeatherComponent'

function App() {

  return (
    <>
      <div>
        <h1 className='text-center font-sans text-lg'>Previsão do tempo</h1>
        <WeatherComponent></WeatherComponent>
      </div>
    </>
  )
}

export default App
