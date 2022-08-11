import styled from "styled-components";

// client logo section
export const ClientStyled=styled.footer`
                display: flex;
                grid-template-columns: repeat(3, 1fr); 
                background:#111214;
                margin-top: 0px;
                padding:20px;
                margin:0px;
                text-align: center;
               
           
                ul{
                    padding: 0;
                    margin: 0;
                }


                ul li{
                    list-style: none;
                    display: inline-block;
                    margin:0px;
                    height: 200px;
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    justify-content: space-around;
                }

                ul li img{
                    width: 400px;
                    height: 100%;
                    margin:0px;
                    padding: 30px;
                }
                img{
                    width:auto;
                    height:110px;
                }

                @media screen and (max-width: 700px) {
                    flex-direction:column;
          }
            
            
    `

    export const StyledTitle=styled.div`
        font-family: 'Nunito';
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        color:#fff;
        padding:30px;
        text-align:center;
        background-color:${props=>props.Bg};
        h2{
            font-size:30px;
        }

        @media screen and (max-width: 700px) {
            grid-template-columns: repeat(1, 1fr);
            text-align:center;
        }
`