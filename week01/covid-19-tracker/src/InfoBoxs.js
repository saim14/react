import React from 'react';
import './InfoBoxs.css';
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBoxs({title, active, isRed, cases,total, ...props}) {
  return (
    <Card 
    onClick={props.onClick}
    className={`infoBoxs ${active && 'infoBox--selected'} ${active && isRed && "infoBox--red"}`}>
      <CardContent>
        <Typography className='infoBox__title' color='textSecondary'>
          {title}
        </Typography>
        <div  className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          <h2>{cases}</h2> 
        </div>
        
        <Typography className='infoBox__total' color='textSecondary'>
          { total } Total
        </Typography>
    </CardContent>
    </Card>
  )
}

export default InfoBoxs;
