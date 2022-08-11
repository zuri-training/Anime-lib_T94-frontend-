import styled from "styled-components";


export const StyledTitle=styled.div`
        font-family: 'Nunito';
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        color:#fff;
        text-align:center;
        padding:30px;
        background-color:${props=>props.Bg};
        h2{
            text-align:center;
            font-size:30px;
        }

        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
            font-size:16px;
        }`

export const TeamCard=styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 10px;
        font-family: 'Nunito';
        padding:20px 90px;
        gap: 10px;
        list-style-type: none;
        color:#fff;
        text-align:center;
        background-color:${props=>props.Bg};
        
        .Purple{
            background-color:#744D7E;
        }
        .Yellow{
            background-color:#FFDD86;
        }
        .Green{
            background-color:#43B97F;
        }
        .Orange{
            background-color:#FD8042;
        }

        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(2, 1fr); 
            column-count: 2;
            padding:20px;
            align-items:center;
  }
    
 `

 export const Proffesion=styled.div`
     padding:1px;
     position: relative;
     display:block; 
     color:${props=>props.Color};
     border-radius:18px;
     background-color:${props=>props.Bg};
     z-index: 1; 
     
    
     & > div {
        border-radius:0px 0px 18px 18px;
        z-index: 1; 
        background-color:${props=>props.Bg2};
     }
     h5{
        font-size:20px;
        margin:0px;
        
     }
     p{
        font-size:12px;
        margin:0px;
        padding:0 2px 5px;
     }
     img{
        width:auto;
        height:230px;
     }

     `
// image
 export const Image=styled.img`
 width:200px;
  margin:0px 0px;
  background-color:${props=>props.Bg};
  z-index: -1;

`