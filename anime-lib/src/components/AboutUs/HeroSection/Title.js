import React from 'react'
import {StyledTitle} from './HeroSection.styles'

function Title() {
  return (
    <>
    <StyledTitle Bg="#181A1C" Height="350px">
        <img src="images/star.png" alt="astar" />
            <img src="images/triangle.png" alt="triangle"/>
            <img src="images/heart.png" alt="heart"/>
            <img src="images/rectangle.png" alt="rectangle"/>
            <img src="images/heart-yellow.png" alt="heart"/>
            <img src="images/circle.png" alt="circle"/>
            <img src="images/rectangle.png" alt="rect"/>
            <img src="images/triangle.png" alt="tria"/>
            <img src="images/star.png" alt="astar" />
            <img src="images/black1.png" alt="black"/>
            <img src="images/diamond.png" alt="diamond"/>
            <img src="images/dotted.png" alt="dotted"/>
         
            <p size="60px" Color="#fff" Weight="800" Line="150%">We Are Known As <font color="#43B97F">The Leader</font><br/>
            In <span Newcolor="#C280D2">Animation Library</span> And <br/><font color="#FFCC4A">Documentation</font>
            </p>
            </StyledTitle>
    </>
  )
}

export default Title