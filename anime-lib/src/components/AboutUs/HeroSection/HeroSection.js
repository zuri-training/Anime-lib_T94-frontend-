import Title  from './Title';
import {StyledHero} from './HeroSection.styles'


import React from 'react'

function HeroSection() {
  return (
    <>
   <Title />
    <StyledHero Bg="#181A1C">
      
            <div >
                <h3 >We believe you should be able to combine and generate the right 
              codes for quality animations</h3>
              <p >With the help of our easy to implement documentation, you can create a distinctive 
                and quality animations. You can search and interact with the library 
                - the tools and solutions you need to design a professional website
                with complete creative freedom a seasoned pro.</p>
                </div>
              <img src="images/star-circle.png" alt="star" />
            
      </StyledHero>
      </>
  );
}

export default HeroSection
