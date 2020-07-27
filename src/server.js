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
let countryList = [];

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
        },
        proxy: "http://influx:whatsapassword@gate.dc.smartproxy.com:20000"
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
}
setUpWorldWide();

// Creates the countryList array with every country with the properties we need
getCountryListData = async () => {
    let response;

    try {
        response = await axios.get('https://corona.lmao.ninja/v2/countries')
    } catch(err){
        console.error(err);
    }

    const {data = [] } = response;
    return data;
}
setUpCountryList = async () => {
    let cl = await getCountryListData();
        cl.forEach(element => {
            ///element.property

            countryList.push(
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
}
setUpCountryList();

// Updater function - updates each hour
updater = () => {
    setUpWorldWide();
    setUpCountryList();
    setTimeout(updater, 3600000);
}

app.listen(3001, () => {
    console.log('Listening');
});