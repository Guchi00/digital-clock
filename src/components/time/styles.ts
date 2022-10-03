import styled from "styled-components";

export const Box = styled.div<{backgroundColor: string}>`
  height: 120px;
  width: 120px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.26) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const DotsContainer = styled.div`
height: 50px;
width: 20px;
/* border: solid 1px blue; */
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Dots = styled.div`
height: 10px;
width: 10px;
border-radius: 10px;
background-color: black;
margin: 5px;
`;

export const FirstBoxItem = styled.span`
font-weight: 600;
font-size: 50px;
font-family: 'Poppins', sans-serif;
`;

export const SecondBoxItem = styled.span`
font-weight: 400;
font-size: 12px;
font-family: 'Poppins', sans-serif;
`;



