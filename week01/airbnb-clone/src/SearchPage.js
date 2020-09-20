import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays - 26 august to 30 august - 2 guest</p>
        <h1>Stays nearby</h1>

        <Button variant='outlined'>Cancellation Flexibility </Button>
        <Button variant='outlined'>Type of Place </Button>
        <Button variant='outlined'>Price </Button>
        <Button variant='outlined'>Rooms and beds </Button>
        <Button variant='outlined'>More Filters </Button>
      </div>

      <SearchResult 
        img='https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
        location='Private room in Dhaka'
        title='Stay at this spacious hotel as home'
        description='1 Guest - 1 Bedroom - 1 Bed - Wi-Fi - Washing machine - Kitchen - Free Parking'
        star={4.73}
        price="$70 / night"
        total = '$210 total'
      />

      <SearchResult 
        img='https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg'
        location='Private room in Dhaka'
        title='Love to stays hotel as home'
        description='1 Guest - 1 Bedroom - 1 Bed - Wi-Fi - Washing machine - Kitchen - Free Parking'
        star={4.3}
        price="$60 / night"
        total = '$180 total'
      />

      <SearchResult 
        img='https://miro.medium.com/max/960/1*6Fq3H1zz9R5fSd55J7-G7w.jpeg'
        location='Private room in Dhaka'
        title='Everything arranged for home guys'
        description='1 Guest - 1 Bedroom - 1 Bed - Wi-Fi - Washing machine - Kitchen - Free Parking'
        star={4.3}
        price="$40 / night"
        total = '$140 total'
      />

      <SearchResult 
        img='https://cf.bstatic.com/images/hotel/max1024x768/681/68184730.jpg'
        location='Private room in Dhaka'
        title='Love to stays hotel as home'
        description='2 Guest - 1 Bedroom - 2 Bed - Wi-Fi - Washing machine - Kitchen - Free Parking'
        star={4.3}
        price="$90 / night"
        total = '$270 total'
      />

      <SearchResult 
        img='https://i.insider.com/5db76378045a313748376347?width=1100&format=jpeg&auto=webp'
        location='Private room in Dhaka'
        title='Everything customized for home peoples'
        description='1 Guest - 1 Bedroom - 1 Bed - Wi-Fi - Washing machine - Kitchen - Free Parking'
        star={4.3}
        price="$60 / night"
        total = '$180 total'
      />

      <SearchResult 
        img='https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg'
        location='Private room in Dhaka'
        title='Love to stays hotel as home'
        description='1 Guest - 1 Bedroom - 1 Bed - Wi-Fi - Washing machine - Kitchen - Free Parking'
        star={4.3}
        price="$60 / night"
        total = '$180 total'
      />

      <SearchResult 
        img='https://cf.bstatic.com/images/hotel/max1024x768/161/161949299.jpg'
        location='Private room in Dhaka'
        title='Love to stays hotel as home'
        description='4 Guest - 2 Bedroom - 2 Bed each - Wi-Fi - Washing machine - Kitchen - Free Parking'
        star={4.3}
        price="$67 / night"
        total = '$280 total'
      />


    </div>
  )
}

export default SearchPage;
