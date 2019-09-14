import React from 'react'
import styled, { keyframes } from 'styled-components'

const Animation = keyframes`
0%{
    transform: scale(1);
    opacity:0.8;
}
50%{
    transform: scale(0.8);
    opacity:0.6;
}
100%{
    transform: scale(1);
    opacity:0.8;
}
`
const Circle = styled.div`
border: 10px solid #7f8c8d;
height: 30px;
width: 30px;
border-radius: 100%;
animation: ${Animation} 1s ease-in-out infinite;
`
Circle.displayName = 'Circle'

export const Spinner = () => {
  return (<Circle/>)
}
