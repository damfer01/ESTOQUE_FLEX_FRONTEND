import styled from "styled-components";

export const CardSttyle = styled.dialog`
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    align-items: center;
    justify-content: center ;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 24px;
    transition: all .2s;
    background-color: #00000044;


    .scroll{
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left ;
        border: none;
        font-size: 24px;
        width: 5%;
        
    }

    .AdicionarProduto{
    position: relative;
        display: flex;
        padding: 16px;
         margin: 4px; 
        margin-left:18px;
        width:  240px;
        height: 34PX;
        font-size: 18px;
        border-radius:10px;
        background-color: #c5c5c5;
        border: 1px solid #000;
        color: #000;
        &::placeholder {
            color: #444;
        }
    }

 

    .alerta{
    position: relative;
        display: flex;
        padding: 16px;
        margin: 4px; 
        margin-left: 18px;
        width:  240px;
        height: 34PX;
        font-size: 18px;
        border-radius:10px;
        background-color: #c5c5c5;
        border: 1px solid #000;
        color: #000;
        &::placeholder {
            color: #444;
        }
 
    }

    .descricao{
    position: relative;
        display: flex;
        margin-top: 1000px;
        margin-left: 18px;
        width: 500px;
        height: 150PX;
    }

    .quantidade{
    position: relative;
        display: flex;
        align-items: botton;
    justify-content: botton ;
        padding: 16px;
         margin-left:1300px;
        width:  240px;
        height: 34PX;
        font-size: 18px;
        border-radius:10px;
        background-color: #c5c5c5;
        border: 1px solid #000;
        color: #000;
        &::placeholder {
            color: #444;
        }
    }

    .compra{
    position: relative;
        display: flex;
        align-items: botton;
    justify-content: botton ;
        padding: 16px;
        margin: 4px;
         margin-left:1300px;
         margin-top : 10px;
        width:  240px;
        height: 34PX;
        font-size: 18px;
        border-radius:10px;
        background-color: #c5c5c5;
        border: 1px solid #000;
        color: #000;
        &::placeholder {
            color: #444;
        }
    }

    .venda{ 
        position: relative;
        display: flex;
        padding: 16px;
         margin-left:1300px;
         margin-top : 0px;
        width:  240px;
        height: 34PX;
        font-size: 18px;
        border-radius:10px;
        background-color: #c5c5c5;
        border: 1px solid #000;
        color: #000;
        &::placeholder {
            color: #444;
        }
    }

    #excluir{
        background:#AD130C;
        display: flex;
        color: #fff;
      align-items: center;
      justify-content: center;
      margin: 5px; 
      padding: 3px;
      font-size: 10px;
      border-radius:5px;
    }



    .Adicionar-referencia{
        background:#14AC10;
        padding: 10px;
        color: #000;
      font-size: 19px;
      border-radius:5px;
      border-radius:50px;
    }

    .Referencia{
        display: flex;
        padding: 16px;
         margin: 4px; 
        margin-left:18px;
        width:  240px;
        height: 34PX;
        font-size: 18px;
        border-radius:10px;
        background-color: #c5c5c5;
        border: 1px solid #000;
        color: #000;
        &::placeholder {
            color: #444;
        }
    }
    
    
    
    form > .foco{
        background-color:#5389A0;
    }

    & > form {
        overflow: auto;
        background-color: #33415544;
        border: 1px solid  #818cf8;
        border-radius:4px;
        width: 90%;
        height: 98%;
        
    }

    
    
    form >.comfirmar{
         background-color:#14AC10;
         position:relative;
         display: flex;
         font-size: 24px;
         top: 0px;
         left: 1530px;
         padding: 10px;
         border-color: #000;
         border-radius:50px;
         border: 1px solid #000;
      
     }
    `;