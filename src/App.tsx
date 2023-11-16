import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
`;

function App() {
  // 1. fetch data from API https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt
  // 2. process data
  // 3. create table or stacked list component to display data, render it
  // 4. create form component to calculate amount
  // 5. add logic for calculating amount on form submit (button or real time)
  // 5.1 input czk amount and select currency
  // 5.2 calculate amount in selected currency

  return (
    <div>
      <header>
        <Title>CNB FX Daily Rates</Title>
      </header>
      <main>
        <section>{/* section for displaying Rates  */}</section>
        <section>{/* section for form to calculate amount */}</section>
      </main>
    </div>
  );
}

export default App;
