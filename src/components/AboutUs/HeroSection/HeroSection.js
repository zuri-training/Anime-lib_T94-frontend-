import Title  from './Title';
import {StyledHero} from './HeroSection.styles'


import React from 'react'

function HeroSection() {
  return (
    <>
   <Title />
    <StyledHero Bg="#181A1C">
      
            <div >
                <h3 >We do the combination,<br/> you do the design.</h3>
              <p >No need to worry about combining the right<br/> codes to animate your designs</p>
                </div>
              <img src="images/star-circle.png" alt="star" />
            
      </StyledHero>
      </>
  );
}

export default HeroSection
