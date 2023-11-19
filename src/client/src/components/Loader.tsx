import styled from 'styled-components';
import { mainGradient } from './styled';

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 10px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(8deg, rgba(134, 66, 201, 0.9), rgb(69 42 101) 42.02%, rgba(248, 103, 103, 0.97)),
    linear-gradient(282deg, #ffd5a9, #ff7fd1);
  background-origin: border-box;
  background-clip: content-box, border-box;

  animation: rotation 0.5s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
