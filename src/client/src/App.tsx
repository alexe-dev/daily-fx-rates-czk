import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
`;

function App() {
  // 1. fetch data from CNB API
  const { data, isPending } = useQuery({
    queryKey: ['fxRates'],
    queryFn: async () => {
      const response = await fetch('http://localhost:9000/proxy');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    },
  });
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
        <section>{isPending ? <div>Loading...</div> : data}</section>
        <section>{/* section for form to calculate amount */}</section>
      </main>
    </div>
  );
}

export default App;
