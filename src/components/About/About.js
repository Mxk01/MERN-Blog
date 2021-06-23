import React,{useEffect,useState} from 'react'
 import FadeIn from 'react-fade-in';
import AboutCSS from './About.module.css';
function About() {
  
    return (
        <div className={AboutCSS.main__container}>
        <FadeIn>
        <div style={{padding:'2rem'}}>
          <p style={{marginTop:'10rem'}}>The purpose of this blog is to practice my web development skills and 
         gather a community around to share their ideas and interests through
         this medium</p>
         <div className="about__me" style={{display:'flex'}}> 
          <img src="https://media-exp3.licdn.com/dms/image/C4D03AQFGh4VDUg_3jw/profile-displayphoto-shrink_800_800/0/1623166791378?e=1629936000&v=beta&t=sjt1-rRT7xGxBb_maHIU5agxhz9yOnh7lPdBsMVRWt8"/>          <div style={{display:'flex',flexDirection:'column'}}> 
          <h1 style={{margin:'15px'}}>About me </h1>
          <p>My name is Robert.I know some Express and mongoose and over the past  few years I built quite a few projects. I am currently learning React to further enchance my skills
</p>
          </div>
 
          </div> 
        </div>
        </FadeIn>
        </div>
    )
}

export default About
