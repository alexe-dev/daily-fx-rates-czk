import styled, { css } from 'styled-components';

export const Title = styled.h2`
  text-align: center;
`;

export const ConverterSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px 0 60px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 10px;
  padding: 0 20px 20px;
`;

export const ConversionInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

export const ConversionInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const baseConversionStyles = css`
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.5), 0 0 0 5px transparent;
  background-color: #1c1c1e;
  color: #fff;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1rem;
  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

export const CZKLabel = styled.label`
  ${baseConversionStyles}
  border-radius: 10px 0 0 10px;
  height: 20px;
  padding: 10px;
  width: 50px;
  @media (max-width: 350px) {
    width: 40px;
  }
`;

export const CZKInput = styled.input`
  ${baseConversionStyles} 
  padding: 10px;
  height: 20px;
  width: 220px;
  border-radius: 0 10px 10px 0;
  @media (max-width: 350px) {
   width: 150px;
  }
}
`;

export const CurrencySelect = styled.select`
  ${baseConversionStyles}
  border-radius: 10px 0 0 10px;
  font-family: 'Nunito Sans', sans-serif;
  width: 70px;
  @media (max-width: 350px) {
    width: 60px;
  }
  height: 40px;
  padding: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 7px;
`;

export const ConversionResult = styled.div`
  ${baseConversionStyles}

  padding: 10px;
  width: 220px;
  border-radius: 0 10px 10px 0;
  height: 20px;
  @media (max-width: 350px) {
    width: 150px;
    font-size: 0.8rem;
  }
`;
