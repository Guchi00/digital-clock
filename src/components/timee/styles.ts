import styled from "styled-components";

export const BoxAndDotCon = styled.div`
 height: 200px;
 width: 700px;
 /* border: solid 1px blue; */
 display: flex;
 align-items: center;
 justify-content: center;

    .dots-container:last-of-type {
        display: none;
    }
 `;

 export const amAndPm = styled.p`
 font-weight: 600;
 font-size: 13px;
 font-family: 'Poppins', sans-serif;
 color: red;
 margin-bottom: 7rem;
 `;