import Alert from "./Alert/Alert";
import styles from "./App.module.css";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {

  const { weather, loading, notFount, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Weather app</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && <Spinner />}
        {hasWeatherData &&
          <WeatherDetail
            weather={weather}
          />
        }
        {notFount && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  )
}

export default App
