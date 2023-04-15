import { IBubbleProps } from "@/interfaces/interfaces";
import styled, { keyframes } from "styled-components";

const moveBubbles = keyframes`
    0%{
        Transform: translateY(100vh) scale(0)
    }
    100%{
        transform: translateY(-10vh) scale(1);
    }
`


export const BodyStyled = styled.div`
    min-height: 100vh;
    background:#0c192c;
`

export const ContainerStyled = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`

export const BubblesStyled = styled.div`
    position: relative;
    display: flex;
    span:nth-child(even){
        background: #ff2d75;
        box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75;
    }
`
export const Bubble = styled.span<IBubbleProps>`
position: relative;
width: 30px;
height: 30px;
background: #4fc3dc;
margin: 0 4px;
border-radius: 50%;
box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
animation: ${moveBubbles} 20s linear infinite;
animation-duration: calc(250s / var(--i));
`;
