import React from 'react'
import numeral from 'numeral'
import { Circle, Popup } from 'react-leaflet'

const casesTypeColors = {
  cases:{
    hex: "#CC1034",
    multiplier:800,
  },
  recovered:{
    hex: "#7dd71d",
    multiplier:1200,
  },
  deaths:{
    hex: "#fb4443",
    multiplier:2000,
  },
}

export const sortData = (data) => {
  const sortedData = [...data]

  sortedData.sort((a, b) => {
    if (a.cases > b.cases){
      return -1;
    } else{
      return 1;
    }
  })
  return sortedData;
}


export const showDataOnMap = (data, casesType='cases') =>
  data.map( (data) => (
    <Circle
      center={[data.countryInfo.lat, data.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(data[casesType]) * casesTypeColors[casesType].multiplier
      }

    >
      <Popup>
        <div className='info-container'>
          <div className='info-flag'
          style={{backgroundImage: `url(${data.countryInfo.flag})`}}
          />
          <div className='info-name'>{data.country}</div>
          <div className='info-confirmed'>Cases:  {numeral(data.cases).format("0,0")}</div>
          <div className='info-recovered'>Recovered:  {numeral(data.recovered).format("0,0")}</div>
          <div className='info-deaths'>Deaths:  {numeral(data.deaths).format("0,0")}</div>
        </div>
      </Popup>
    </Circle>
  ));

  export const prettyPrintStat = (stat) => stat ? `+${numeral(stat).format("0.0a")}`: "+0";

  export const prettyPrintStat2 = (stat) => stat ? `${numeral(stat).format("0.0a")}`: "0";