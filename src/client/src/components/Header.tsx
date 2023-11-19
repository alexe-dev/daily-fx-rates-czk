import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 50px;
  font-size: 4em;
  text-align: center;
  background: linear-gradient(313deg, rgb(103 52 161), rgb(28, 28, 30) 51%, rgba(186, 24, 178, 0.73));
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
