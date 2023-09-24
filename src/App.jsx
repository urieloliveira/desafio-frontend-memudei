import './App.css'
import WeatherSearch from './Components/WeatherSearch'

function App() {


  return (
    <>
    <div class="flex flex-col justify-center items-center h-screen">
      <h1 class=''>Previsão do Tempo</h1>
      <WeatherSearch></WeatherSearch>
    </div>
    </>
  )
}

export default App
