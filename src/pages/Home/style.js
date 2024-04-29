import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

 #cadastro{
    margin-left: 18px;
 }
`;


export const SelectGridView = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    padding: 16px;
    margin-right: 15px;


    `;

export const GridView = styled.div `
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    grid-gap:16px;
    flex:1;
    padding: 20px; 
    padding-top: 16px;
    overflow: hidden ;    
    `
