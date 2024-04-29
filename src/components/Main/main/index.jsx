import styled from "styled-components";
import background from "../../../assets/background.jpg"

export  const Main = styled.main`
display: flex;
flex-direction: column;
align-items : center;
justify-content : space-between;
width: 100%;
height: 100%;
padding: 0px 16px 0px 16px;
background-image: url(${background});
`;