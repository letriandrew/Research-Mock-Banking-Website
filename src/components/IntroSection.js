import React from 'react'
import { Button } from './Button'
import './IntroSection.css';
import '../App.css';

function IntroSection() {
  return (
    <div className='intro-container'>
      <video src='/videos/bankvideoloop.mp4' autoPlay loop muted />
      <h1>
        WELCOME TO ACADEMIABANK
      </h1>
      <p>
        A Mock Banking Website
      </p>
      <div className='intro-btns'>
        <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default IntroSection;
