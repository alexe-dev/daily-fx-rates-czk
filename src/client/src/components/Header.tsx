import styled from 'styled-components';
import { mainGradient } from './styled';

const Title = styled.h1`
  margin-top: 50px;
  font-size: 4em;
  text-align: center;
  ${mainGradient}
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const Header = () => {
  return (
    <header>
      <Title>CNB Exchange Rates</Title>
    </header>
  );
};
