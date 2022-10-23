import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import axios from "axios";
import { weatherForecast } from './Api'
import Weather from './components/Weather';
import Loader from './components/Loader';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 60,
    padding: 15,
    marginLeft: "400px",
    marginRight: "400px",
    textAlign: 'center',
  },
  info: {
    fontSize: 35,
    margin: "10px",
  },
  active: {
    color: "#2196f3"
  }
}));

function App() {
  const classes = useStyles();
  const CITIES = ["OTTAWA", "MOSCOW", "TOKYO"];
  const [state, setState] = useState({
    value: "OTTAWA",
    current: {
    },
    weekInfo: [],
    loading: false,
    error: false,
  })

  const handleClick = (e, value) => {
    e.preventDefault();
    setState({
      ...state,
      value,
    })
  };

  const getWeatherInfo = () => {
    axios.get(weatherForecast(state.value))
      .then(response => {
        const data = response.data
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ]

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const currentDate = new Date()
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
          }`;

        const current = {
          city: data.city.name,
          country: data.city.country,
          date,
          temp: data.list[0].temp.day,
          icon: data.list[0].weather[0].icon,
          hTemp: data.list[0].temp.max,
        }

        const weekData = data.list
        const weekInfo = weekData.map((data, index) => {
          return {
            key: index,
            main: data.weather[0].main,
            day: new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).slice(0, 3),
            desc: data.weather[0].description,
            icon: data.weather[0].icon,
            hTemp: data.temp.max,
          }
        })

        setState({
          ...state,
          current,
          weekInfo,
          loading: false,
          error: false,
        })

      })
      .catch(error => {
        console.log(error);

        setState({
          ...state,
          loading: false,
          error: true,
          current: {},
          weekInfo: [],
        })
      })
  }

  useEffect(() => {
    getWeatherInfo();
  }, [state.value])
  return (
    <>

      {
        state.loading === true ?
          <Loader /> :
          (
            <div className={classes.root}>
              {CITIES.map((label, idx) => (
                <Button
                  key={`button-${idx}`}
                  className={classes.info}
                  style={{ color: state.value === label ? "#2196f3" : "" }}
                  onClick={(e) => handleClick(e, label)}
                >
                  {label}
                </Button>
              ))}
              {
                state.current.country !== undefined &&
                <div className="weather">
                  <Weather today={state.current} weekly={state.weekInfo} />
                </div>
              }
            </div>
          )
      }
    </>
  )
}

export default App;
