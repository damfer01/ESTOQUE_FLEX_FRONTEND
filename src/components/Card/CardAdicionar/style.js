import styled from "styled-components";

    export const CardSttyle = styled.dialog`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 92%;
    border: none;
    font-size: 24px;
    transition: all .2s;
    background-color: #00000999;
    overflow: hidden;
    
    
    form {
        display: flex;
        flex-direction: column;
        padding: 15px;
        margin-top: 10rem;
    }
    
    form > .foco{   padding: flex;
        background-color:#5389A0;
    }
    & > form {
        padding: flex;
        overflow: hidden;
        background-color: transparent;
        border-radius: 10px;
        width: 40rem;
        height: 45rem;
    }
    .scroll{
        display: flex;
        flex-direction: row;
        align-items: left;
        justify-content: space-between;
        border: none;
        font-size: 24px;
        width: 100%;
        height: 15rem;
    
    .left{
        padding: flex;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
    }

    .rithg {
        display: flex;
        justify-content: left;
        align-items: center;
        justify-content: l;
        flex-direction: column;
        margin-right: 45px;
    }

    form > .low {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    }

    .AdicionarProduto{
        position: relative;
        display: flex;
        padding: 16px;
         margin-bottom: 4px; 
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

    form > .low > .descricao{
        display: flex;
        margin: 4px 4px 20px 60px;
        width: 80%;
        height: 96%;

        
    }

    .quantidade{
        padding: flex;
        align-items: left;
    justify-content: left ;
        padding: 16px;
        width:  240px;
        height: 34PX;
        margin-left:18px;
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
        display: flex;
        align-items: botton;
    justify-content: botton ;
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

    .venda{ 
        position: relative;
        display: flex;
        padding: 16px;
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
        position: absolute;
        padding: flex;
        left: 58rem;
        top: 5px;
        background:#AD130C;
        display: flex;
        color: #fff;
      align-items: center;
      justify-content: center;
      padding: 3px;
      font-size: 10px;
      border-radius:50%;
      height: 40px;
      width: 40px;
    }



    .Adicionar-referencia{
      display: flex;
      position: absolute;
      padding: flex;
      right: 58rem;
      align-items: center;
      justify-content: center;
      background:#14AC10;
      color: #000;
      width: 40px;
      height: 40px;
      border-radius: 150px;
      font-size: 15px;
      margin: 0 0 20px 15px;
    }
    
    .Referencia{
        display: flex;
        padding: 16px;
        margin: 4px; 
        width:  240px;
        height: 34PX;
        font-size: 18px;
        overflow-y: scroll;
        border-radius:10px;
        background-color: #c5c5c5;
        border: 1px solid #000;
        color: #000;
        &::placeholder {
            color: #444;
        }
    }
    
    
    

    
    
    form > .low > .comfirmar {
         background-color:#14AC10;
        padding: flex;
         display: flex;
         font-size: 24px;
         top: 0px;
         left: 170px;
         padding: 10px;
         border-color: #000;
         border-radius:50px;
         border: 1px solid #000;
         width: 20rem;
      
     }

     form > .low > .desc {
        position: flex;
        padding: flex;
        left: 10rem;
        color: white;
     }



     
    `;