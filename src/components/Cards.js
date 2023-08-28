import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>
        Check out some of our features!
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src="images/checkingpic.jpg"
                text="Set up a mock checking account!"
                label='Checking Account'
                path='/signup'
                />
                <CardItem 
                src="images/savingpic.jpg"
                text="Set up a mock saving account!"
                label='Saving Account'
                path='/signup'
                />
                <CardItem 
                src="images/aboutpic.jpg"
                text="Find out more about our research!"
                label='About Us'
                path='/about'
                />
                <CardItem 
                src="images/contactpic.jpg"
                text="Connect with us here!"
                label='Questions?'
                path='/contact'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
