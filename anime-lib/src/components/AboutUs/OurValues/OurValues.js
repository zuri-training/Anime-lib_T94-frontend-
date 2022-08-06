import React from 'react'
import {CardStyled,ColoredText,CircleValues,CardMain} from './OurValues.style'
import Title from './Title'

function OurValues() {
  return (
    <>
    {/* Our values */}
    
    <Title />
       <CardMain Bg="#111214">
        <CardStyled>
              <CircleValues Bg="#C280D2">
              <img src="images/heart.png" alt="heart" className="heart"/>
                </CircleValues>
                    <ColoredText Color="#C280D2" pat="7px" Weight="700">
                        PASSION
                    </ColoredText>
                <p>Deep-seated motivation to do quality work is what enables us to 
                 approach each assignment with vigour and excitement.</p>
            </CardStyled>
        
        <CardStyled>
                <CircleValues Bg="#FFCC4A">
                  <img src="images/team1.png" alt="team" className="team"/>
                </CircleValues>
                    <ColoredText Color="#FFCC4A" pat="7px" Weight="700">
                        TEAM WORK
                    </ColoredText>
                     <p>Consider us as additional team members with all the
                      talents you require because we are committed to helping you achieve the greatest 
                      results from your project.</p>  
        </CardStyled>
        
        <CardStyled>
                <CircleValues Bg="#43B97F">
                <img src="images/focus.png" alt="focus" className="focus"/>
                 </CircleValues>
                    <ColoredText Color="#43B97F" pat="7px" Weight="700">
                        FOCUS
                    </ColoredText>
                
                    <p>No matter what it takes, we are fully committed to making 
                    every one of our sites the best they can be.</p>
        </CardStyled>
        
        <CardStyled>
                <CircleValues Bg="#FF830F">
                  <img src="images/empathy.jpg" alt="empathy" className="empathy"/>
                </CircleValues>
                    <ColoredText Color="#FF830F" pat="7px" Weight="700">
                        EMPATHY
                    </ColoredText>
                
                    <p>Consider us as additional team members with all the talents 
                    you require because we are committed to helping you achieve the greatest results
                     from your project.</p>
                    

        </CardStyled>
       
    </CardMain>
    
    </>
  )
}

export default OurValues