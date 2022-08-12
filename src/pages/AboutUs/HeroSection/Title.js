import React from "react";

import { StyledTitle } from "./HeroSection.styles";
import StarImg from "../../../assets/images/star.png";
import RectangleImg from "../../../assets/images/rectangle.png";
import TriangleImg from "../../../assets/images/triangle.png";
import HeartImg from "../../../assets/images/heart.png";
import PolygonImg from "../../../assets/images/Polygon.png";
import CircleImg from "../../../assets/images/circle.png";
import RectangleYellowImg from "../../../assets/images/Rectangle-yellow.png";
import BlackImg from "../../../assets/images/black1.png";
import DiamondImg from "../../../assets/images/diamond.png";
import DottsImg from "../../../assets/images/dotts.png";

function Title() {
  return (
    <>
      <StyledTitle Bg="#181A1C" Height="350px">
        <img src={StarImg} alt="astar" />
        <img src={TriangleImg} alt="triangle" />
        <img src={HeartImg} alt="heart" />
        <img src={RectangleImg} alt="rectangle" />
        <img src={PolygonImg} alt="polygon" />
        <img src={CircleImg} alt="circle" />
        <img src={RectangleYellowImg} alt="rect" />
        <img src={TriangleImg} alt="tria" />
        <img src={RectangleYellowImg} alt="astar" />
        <img src={BlackImg} alt="black" />
        <img src={DiamondImg} alt="diamond" />
        <img src={DottsImg} alt="dotted" />

        <p size="80px" Color="#fff" Weight="800" Line="150%">
          We Are A Team Dedicated To <br /> Simplify{" "}
          <font color="#C280D2">CSS Animation</font>
          <br />
          <font color="#43B97F">For Developers</font>
        </p>
      </StyledTitle>
    </>
  );
}

export default Title;
