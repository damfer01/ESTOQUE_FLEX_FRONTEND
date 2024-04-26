import styled from "styled-components";

export const VisualSttyle = styled.dialog`
    position: absolute;
    display: flex ;
    flex-direction:column ;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center ;
    overflow: scroll;
    width: 100%;
    height: 100%;
    border: none;
    color: #000;
    font-size: 24px;
    font-weight: 600;
    transition: all .2s;
    background-color: #00000099;

   div> span{
        background-color: #c5c5c5;
        display: flex;
        padding: 16px;
         font-size: 16px;
         
        border-radius:10px;
        border: 1px solid #000;
        border-color: rgb(147 197 253);
         margin: 5px;
        align-items: center;
        justify-content: center ;
        width:  240px;
        height: 34PX;
        &::placeholder {
            color: #444;
        }
    }

    .produto{
        background-color:#D9D9D9;
        display: flex;
        padding: none;
         font-size: 16px;
        border-radius:10px;
        border: 1px solid #000;
        border-color: rgb(147 197 253);
         margin: 5px;
        align-items: center;
        border-color: #000;
        justify-content: center ;
        width:  240px;
        height: 34PX;
    }

     .data{
        background-color:#D9D9D9;
        display: flex;
        padding: 16px;
         font-size: 16px;
        border-radius:10px;
        border: 1px solid #000;
        border-color: rgb(147 197 253);
         margin: 2px;
        align-items: center;
        border-color: #000;
        justify-content: center ;
        width:  240px;
        height: 34PX;
     }

     .descricao{
        background-color:#D9D9D9;
        display: flex;
        padding: var();
         font-size: 16px;
        border-radius:10px;
        border: 1px solid #000;
        border-color: rgb(147 197 253);
         margin: 5px;
        align-items: center;
        border-color: #000;
        justify-content: center ;
        width:  240px;
        height: 34PX;

    }

    .quantidade{
        background-color:#D9D9D9;
        display: flex;
        padding: none;
         font-size: 16px;
        border-radius:10px;
        border: 1px solid #000;
        border-color: rgb(147 197 253);
         margin: 5px;
        align-items: center;
        border-color: #000;
        justify-content: center ;
        width:  240px;
        height: 34PX;
 
    }

     div > .foco{
        margin: 10px;
        background-color:#D9D9D9;
    }

    button {
        display: grid;
        align-items: center;
      justify-content: center;
      color: #FFF;
       background:#AD130C;
       border-color: rgb(147 197 253);
       border: 1px solid #000;
       border-radius: 10px;
       
       
    }

    #excluir{
        display: grid;
        align-items: center;
      justify-content: center;
      padding: 8PX;
      font-size: 16px;
      color: #FFF;
       background:#AD130C;
       border-color: rgb(147 197 253);
       border: 1px solid #000;
       border-radius: 10px;
       
    }
    

     .editar{
         background-color:#CDDA38;
         display: flex;
         border-radius: 10px;
         padding: 8px;
         color: #FFF;
         font-size: 16px;
         border: 1px solid #000;
         border: none;
        
     }

   

    

`;