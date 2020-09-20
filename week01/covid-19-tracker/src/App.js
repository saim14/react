import React, { useState, useEffect } from 'react';
import './App.css';
import InfoBoxs from './InfoBoxs';
import Map from './Map';
import Table from './Table';
import Graph from './Graph'
import {FormControl, MenuItem, Select, Card, CardContent} from '@material-ui/core'
import { sortData, prettyPrintStat, prettyPrintStat2 } from "./util"
import "leaflet/dist/leaflet.css"

// https://disease.sh/v3/covid-19/countries



function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("worldwide")
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796});
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([])
  const [casesType, setCasesType] = useState("cases");

  useEffect( () => {
    fetch('https://disease.sh/v3/covid-19/all').then(response => response.json()).then(data => {
      setCountryInfo(data);
      
    })
  },[])
  
  useEffect( () => {
    const getCountriesData = async () =>{
      await fetch ("https://disease.sh/v3/covid-19/countries").then((response) => response.json()).then((data) => {
        //console.log("Countries data: ", data);
        //
        
        const countries = data.map((country) => ({
          name: country.country, 
          value: country.countryInfo.iso2,
        }));  
        

        const sortedData = sortData(data)
        setTableData(sortedData);
        setMapCountries(data); 
        setCountries(countries); 
      });
    };
    getCountriesData(); 
  },[]);

  const onCountryChange = async (event) =>{
    const countryCode = event.target.value;
    console.log('Yooooo!>>>>', countryCode);
    setCountry(countryCode);
    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    // https://disease.sh/v3/covid-19/all
    // https://disease.sh/v3/covid-19/[COUNTRY_CODE]

    await fetch(url).then(response => response.json()).then(data => {
      setCountry(countryCode)
      setCountryInfo(data);
      let x = data.countryInfo.lat
      setMapCenter([ x, data.countryInfo.long])
      setMapZoom(4);
      
    });

  }
  return (
    <div className="app">
      <div className='app__left'>
        <div className='app__header'>
          <h1>COVID-19-TRACKER</h1>
          <FormControl className='app__dropdown'>
            <Select 
              variant='outlined'
              onChange= {onCountryChange}
              value = {country}>

              <MenuItem value= 'worldwide' >Worldwide </MenuItem>
              {countries.map((country) => (
                  <MenuItem value={country.value}>
                    {country.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>

        <div className='app__stats'>
          {/* InfoBoxs */}
          <InfoBoxs 
          isRed
          active ={casesType === 'cases'}
          onClick={ e => setCasesType('cases') }
          title='Coronavirus Cases' 
          total={prettyPrintStat2(countryInfo.cases)} 
          cases={prettyPrintStat(countryInfo.todayCases)}
          />
          <InfoBoxs 
          active = {casesType === 'recovered'}
          onClick={ e => setCasesType('recovered') }
          title='Recovered' 
          total= {prettyPrintStat2(countryInfo.recovered)} cases={prettyPrintStat(countryInfo.todayRecovered)}/>
          <InfoBoxs 
          isRed
          active = {casesType === 'deaths'}
          onClick={ e => setCasesType('deaths') }
          title='Deaths' 
          total={prettyPrintStat2(countryInfo.deaths)} 
          cases={prettyPrintStat(countryInfo.todayDeaths)}/>
        </div>


        <Map 
          countries = {mapCountries}
          center ={mapCenter}
          zoom = {mapZoom}
          casesType={casesType}
        />
      </div>
      

      <Card className='app__right'>
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData}/>
              <h3 className='app__right__title'>Worldwide New Cases</h3>
          <Graph casesType={casesType}/>
        </CardContent>
        
      </Card>
      



    </div>
  );
}

export default App;
