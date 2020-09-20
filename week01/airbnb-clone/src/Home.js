import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

//The rooms at the Panoramic Hotel are new,  stay in Taormina, suggesting itineraries, 
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className='home__section'>
        <Card src='https://cf.bstatic.com/images/hotel/max1024x768/161/161949299.jpg' 
        title = 'Basundhara City Park'  
        description = 'Guided visits and some good restaurants in the centre.' 
        price = '250$'/>

        <Card src='https://cf.bstatic.com/images/hotel/max1024x768/681/68184730.jpg' 
        title = 'Hulu Fever House'  
        description = 'The rooms at the Panoramic Hotel are new' 
        price = '300$/night'/>

        <Card src='https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' 
        title = 'Epic Center Villa'  
        description = 'Reception staff will be happy to help you during your' 
        price = '500$'/>
      </div>

      <div className='home__section'>
        <Card src='https://miro.medium.com/max/960/1*6Fq3H1zz9R5fSd55J7-G7w.jpeg' 
        title = 'Panundhara Village Park'  
        description = 'Guided visits some good restaurants in the historic.' 
        price = '250$'/>

        <Card src='https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
        title = 'Bhuna Fever House'  
        description = 'The rooms at the Panoramic Hotel are new' 
        price = '300$'/>

        <Card src='https://i.insider.com/5db76378045a313748376347?width=1100&format=jpeg&auto=webp' 
        title = 'Peri Peri Villa'  
        description = 'Our reception will be happy to help you during your' 
        price = '500$'/>
      </div>
      <div className='home__section'>
      <Card src='https://dammedia.ledvance.info/media/img/asset-4086347//c,x,0,y,1058,w,4165,h,2342/s,x,1600,y,0/iStock-185270129.jpg' 
        title = 'Hulu Fever House'  
        description = 'The rooms at the Panoramic Hotel are new' 
        price = '300$'/>
        
        <Card src='https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' 
        title = 'Epic Center Villa'  
        description = 'Reception staff will be happy to help you during your' 
        price = '500$'/>

        <Card src='https://cf.bstatic.com/images/hotel/max1024x768/161/161949299.jpg' 
        title = 'Basundhara City Park'  
        description = 'Guided visits and some good restaurants in the centre.' 
        price = '250$'/>
      </div>
      
    </div>
  )
}

export default Home
