import styled from "styled-components";


// hero section styling
export const StyledTitle=styled.div`
        font-family: 'Nunito';
        display:grid;
        grid-template-columns: repeat(1, 1fr);
        background-color:${props=>props.Bg};
        padding:50px 0;
        text-align:center;

       p{
        font-size:60px;
        color:#fff;
        font-family: 'Nunito';
        font-weight:800;
       }

       img{
        position:absolute;
        height:20px;
        width:20px;
        left:${props=>props.lf};
       }
       img:nth-child(1){
        right: 25%;
        bottom:45%;
    }
    img:nth-child(2){
        right: 30%;
        bottom:50%;
    }
    img:nth-child(3){
        left: 30%;
        bottom:50%;
    }
    img:nth-child(4){
        left: 22%;
        bottom:60%;
    }
    img:nth-child(5){
        left: 10%;
        bottom:70%;
    }
    img:nth-child(6){
        right: 10%;
        bottom:60%;
    }
    img:nth-child(7){
        right: 20%;
        bottom:60%;
    }
    img:nth-child(8){
        right: 50%;
        top:5%;
        color:yellow;
    }
    img:nth-child(9){
        right: 30%;
        top:5%;
        color:yellow;
    }
    img:nth-child(10){
        left: 15%;
        top:40%;
        
    }
    img:nth-child(11){
        left: 50%;
        bottom:40%;
        
    }
    img:nth-child(12){
        right: 10%;
        bottom:50%;
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
       
        align-items:center;
          
        
        p{
            font-size:40px;
        }
        
        `

// hero section 2 styling
export const StyledHero=styled.text`
        font-family: 'Nunito';
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        background-color:${props=>props.Bg};
        color:#fff;
        padding:40px 0px;

            span{
                color:${props=>props.Newcolor};
            }
           
        h3{
            text-align:left;
            font-size:30px;
            font-weight:800;
            padding:0 70px;
        }
        
        p{
            text-align:left;
            font-size:16px;
            font-weight:500;
            padding: 0 10px 0 60px;
        }
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            padding-top:30px;
            padding-right:20px;
            width: 50%;
        }

       
        @media screen and (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        column-count: 1;
           
         
 }
`