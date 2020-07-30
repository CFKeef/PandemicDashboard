const express = require('express');
const cors = require('cors');
const request = require("request-promise");
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Data
let worldWide = ({
    cases: null,
    todayCases: null,
    active: null,
    recovered: null,
    todayRecovered: null,
    deaths: null,
    todayDeaths: null
})
let sortedList = [];
let graphData = [];

// Creates the worldwide object
getWorldWideData = async () => {
    let options = {
        url: "https://disease.sh/v3/covid-19/all",
        method: "GET",
        json: true,
        simple: false,
        resolveWithFullResponse: true,
        followAllRedirects: false,
        gzip: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        let response = await request(options);
        return response.body;
    } catch(err) {
        console.log(err)
    }
}
setUpWorldWide = async () => {
    let ww = await getWorldWideData();

    worldWide.cases = ww.cases;
    worldWide.todayCases = ww.todayCases;
    worldWide.active = ww.active;
    worldWide.recovered = ww.recovered;
    worldWide.todayRecovered = ww.todayRecovered;
    worldWide.deaths = ww.deaths;
    worldWide.todayDeaths = ww.todayDeaths;

    console.log('ww set up');
}

// Create the sorted country list
getSortedListData = async () => {
    let response;

    try {
        response = await axios.get('https://disease.sh/v3/covid-19/countries?sort=cases')
    } catch(err){
        console.error(err);
    }

    const {data = [] } = response;
    return data;
}
setUpSortedList = async () => {
    let sl = await getSortedListData();
        sl.forEach(element => {
            sortedList.push(
                {
                    flag: element.countryInfo.flag,
                    country: element.country,
                    cases: element.cases,
                    todayCases: element.todayCases,
                    active: element.active,
                    recovered: element.recovered,
                    todayRecovered: element.todayRecovered,
                    deaths: element.deaths,
                    todayDeaths: element.todayDeaths
                }
            )
    })
    console.log('sl set up');
}

// Set up once and then rely on updater to update the data 
setUpWorldWide();
setUpSortedList();

// Updater function - updates every 6 hours
updater = () => {
    setUpWorldWide();
    //setUpCountryList();
    setUpSortedList();
    setTimeout(updater, 43200000);
}

getGraphData = async (selected) => {
    let response;

    try{
        response = await axios.get('https://disease.sh/v3/covid-19/historical/'+selected+'?lastdays=30');
    }catch(err){
        console.log(err);
    }
    
    const { data = [] } = response;

    return data;
}

app.get('/worldwide', (req, res) => {
    try {
        res.send(worldWide);
    }catch(err){
        res.send("somethings fucked");
    }
})

app.get('/sortedlist', (req,res) => {
    res.send(sortedList);
})

app.post('/graphdata', async (req,res) => {
    let selected = req.body.countryName;

    let response = await getGraphData(selected);

    res.send(response);
})

app.listen(3001, () => {
    console.log('Listening');
});