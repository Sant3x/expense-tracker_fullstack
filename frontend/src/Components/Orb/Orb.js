import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

const OrbStyled = styled.div`
  width: 70vh;
  height: 70vh;
  position: absolute;
  border-radius: 50%;
  margin-left: -37vh;
  margin-top: -37vh;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  filter: blur(400px);
  animation: ${(props) => props.moveOrb} 15s alternate linear infinite;
`;

function Orb() {
  const { width, height } = useWindowSize();

  const moveOrb = keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${width}px, ${height / 2}px);
    }
    1200% {
      transform: translate(0, 0);
    }
  `;

  return <OrbStyled moveOrb={moveOrb}></OrbStyled>;
}

export default Orb;
