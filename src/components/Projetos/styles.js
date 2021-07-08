import styled from 'styled-components';

export const Proj = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&display=swap");

  background-color: #1e2120;
  height: 800px;
  font-family: "Fira Code", monospace;
  display: flex;
   h1{
       font-size: 45px;
       margin-left: 127px;
       margin-top: 57px;
       color: #FFFFFF;
   }

   div{
       width: 787px;
       height: 167px;
       background-color: #494746;
       margin-top: 150px;
       border-radius: 15px;
       color: #FFFFFF;
       display: flex;
       align-items: center;
       transition: transform 0.2s;

       &:hover{
           transform: translateX(8px);
       }

       & + div{
           margin-top: 30px;
       }

       a{
         color: inherit;
        text-decoration: none;
        display: flex;
       }
       img{
           width: 210px;
           margin-top: 25px;
           margin-left: 41px;
       }

       .imgsvg{
          width: 40px;
          height: 40px;
          margin: auto 10px;
       }

       p{
           margin-left: 25px;
           h3{
               text-align: center;
               margin-bottom: 20px;
           }
       }
   }

       @media screen and (min-width: 1500px) {
           div{
               margin-left: 500px;
           }
         }
  
        @media screen and (max-width: 640px) {
            height: 800px;
            width: 60vh;

            h1{
                margin-left: 25px;
            }
            div{
                width: 387px;
                height: 167px;
                margin-left: -250px;
                transition: transform 0.2s;

                      &:active{
                     transform: translateX(8px);
                           }

                img{
                      width: 150px;
                      height: 110px;
                      margin-top: 25px;
                      margin-left: 41px;
                    }
                    p{
                    margin-left: 25px;
                    font-size: 12px;
                    h3{
                       text-align: center;
                        margin-bottom: 20px;
                     }
                 }
            }
        }
      
`;