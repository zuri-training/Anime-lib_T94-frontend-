import styled from "styled-components";

// Our values section styling
export const StyledOurValues=styled.div`
        font-family: 'Nunito';
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        color:#fff;
        text-align:center;
        align-items:center;
        padding:30px;
        background-color:${props=>props.Bg};
        h2{
            font-size:30px;
        }
        
        
        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
            
            font-size:16px;
 }`


 // Our value circle styling
export const CircleValues=styled.text`
        height:150px;
        width:150px;
        padding:5px;
        background-color:${props=>props.Bg};
        border-radius: 50%;
        display: inline-block;   
        text-align:center;

        img {
            position:absolute;
            height:40px;
            width:40px;
            z-index:1;
            margin-top:${props=>props.mt};
            margin-left:${props=>props.ml};
        }
        .heart{
            position:absolute;
            height:40px;
            width:40px;
            background-color:#C280D2;
            z-index:1;
            margin-top:50px;
            margin-left:-20px;
        }
        .team{
            position:absolute;
            height:40px;
            width:40px;
            background-color:#FFCC4A;
            z-index:1;
            margin-top:50px;
            margin-left:-20px;
        }
        .focus{
            position:absolute;
            height:40px;
            width:40px;
            background-color:#43B97F;
            z-index:1;
            margin-top:50px;
            margin-left:-20px;
        }
        .empathy{
            position:absolute;
            height:40px;
            width:40px;
            background-color:#FF830F;
            z-index:1;
            margin-top:50px;
            margin-left:-20px;
        }
        

        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
            align-items:center;
    
}
`

// colored text styling
export const ColoredText=styled.text`
        font-family: 'Nunito';
        font-style:normal;
        padding-top:${props=>props.pat};
        font-size:${props=>props.size};
        color:${props=>props.Color};
        font-weight:${props=>props.Weight};
        line-height:${props=>props.Line};

        span{
            color:#C280D2;
        }
        
        `
        export const CardMain=styled.div`
            font-family: 'Nunito';
            display:flex;
            padding:20px;
            margin:0px;
            justify-content:center;
            align-items:center;
            background-color:${props=>props.Bg};

           

            @media screen and (max-width: 700px) {
                flex-direction:column;
    
}
`

export const CardStyled=styled.div`
        display:flex;
        flex-direction:column;
        font-family: 'Nunito';
        width: 283px;
        height: 400px;
        padding:10px;
        color:#fff;
        margin:0px;
        align-items:center;
        text-align:center;

        p{
            font-size:16px;
            line-height:24px;
        }

        h5{
            font-size:20px;
            color:${props=>props.innerColor};
        }
        
        
        @media screen and (max-width: 700px) {
            flex-direction: column; 
            align-items:center;
            justify-content:center;
            margin:0px;
  } 
        
`

