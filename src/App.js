import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

//Components
import Header from './Components/Header/Header.js';
import Content from './Components/Content/Content.js';

function App() {
  const [worldWide, setWorldWide] = useState({
      country: null,
      cases: null,
      todayCases: null,
      active: null,
      recovered: null,
      todayRecovered: null,
      deaths: null,
      todayDeaths: null
  })
  const [current, setCurrent] = useState({
      country: 'all countries',
      cases: null,
      todayCases: null,
      active: null,
      recovered: null,
      todayRecovered: null,
      deaths: null,
      todayDeaths: null
  })
  const [sortedList, setSortedList] = useState([])

  useEffect( () => {
      const backEndCalls = async () => {
        let ww = await axios.get('./worldwide');
        let sl = await axios.get('./sortedlist');

        // Update worldwide's state
        setWorldWide( () => ({
          country: 'all countries',
          cases: ww.data.cases,
          todayCases: ww.data.todayCases,
          active: ww.data.active,
          recovered: ww.data.recovered,
          todayRecovered: ww.data.todayRecovered,
          deaths: ww.data.deaths,
          todayDeaths: ww.data.todayDeaths
        }))   

        //Update current to worldwide
        setCurrent( () => ({
          country: 'all countries',
          cases: ww.data.cases,
          todayCases: ww.data.todayCases,
          active: ww.data.active,
          recovered: ww.data.recovered,
          todayRecovered: ww.data.todayRecovered,
          deaths: ww.data.deaths,
          todayDeaths: ww.data.todayDeaths
        }))

        // Update SortedList's
        setSortedList(prevState => [...prevState, sl.data]);
      }
      backEndCalls();
  }, [])

  const handleSwap = (choice) => {
      sortedList.map(element => {
        element.map(cl => {
          if(cl.country == choice) {
            setCurrent( () => ({
              country: cl.country,
              cases: cl.cases,
              todayCases: cl.todayCases,
              active: cl.active,
              recovered: cl.recovered,
              todayRecovered: cl.todayRecovered,
              deaths: cl.deaths,
              todayDeaths: cl.todayDeaths
            }))
          }
      })
    })
  }
  const handleReset = () => {
    setCurrent(()=> ({
      country: 'all countries',
      cases: worldWide.cases,
      todayCases: worldWide.todayCases,
      active: worldWide.active,
      recovered: worldWide.recovered,
      todayRecovered: worldWide.todayRecovered,
      deaths: worldWide.deaths,
      todayDeaths: worldWide.todayDeaths
    }))  
  }
  return (
    <div className="App">
      <Header />
      <Content 
        worldWideData={worldWide}
        currentData={current}
        sortedData={sortedList}
        updateCurrent={handleSwap}
        resetData={handleReset}
      />
    </div>
  );
}

export default App;
