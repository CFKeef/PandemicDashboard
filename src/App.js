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
  const [currentCaseDates, setCurrentCaseDates] = useState([]);
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
        setSortedList((prevState)=> [...prevState, sl.data]);
        setGraphStateToAllData();
      }
      backEndCalls();
  }, [])

  const setCurrentToSelected = (choice) => {
    sortedList.map(element => {
      element.map(cl => {
        if(cl.country === choice) {
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
  const setGraphStateToAllData = async () => {
    // Send Country name to back end
    let res = await axios.post('./graphdata', {countryName: 'all'});
 
    setCurrentCaseDates( () => res.data);
  }
  const swapGraphsToSelected = async (choice) => {
    // Send Country name to back end
    let res = await axios.post('./graphdata', {countryName: choice});
    let cases = res.data.timeline.cases;
    
    let stringArray = [];

    for(const date in cases){
      let str = {x: new Date(date), y: cases[date]};
      stringArray.push(str);
    }
    setCurrentCaseDates( () => stringArray);
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
    setGraphStateToAllData();
  }
  const handleSwap = (choice) => {
    setCurrentToSelected(choice);
    swapGraphsToSelected(choice);
}
  return (
    <div className="App">
      <Header />
      <Content 
        worldWideData={worldWide}
        currentData={current}
        sortedData={sortedList}
        selectedGraphData={currentCaseDates}

        resetData={handleReset}
        updateCurrent={handleSwap}
        changeGraphToSelected={swapGraphsToSelected}
      />
    </div>
  );
}

export default App;
