import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 50px;
  font-size: 4em;
  text-align: center;

  background: linear-gradient(90deg, rgba(205, 36, 36, 1) 0%, rgba(49, 31, 198, 1) 51%, rgba(186, 24, 178, 1) 100%);

  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const Header = () => {
  return (
    <header>
      <Title>CNB FX Daily Rates</Title>
    </header>
  );
};
