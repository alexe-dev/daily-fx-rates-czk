import styled, { css } from 'styled-components';
import { mainGradient } from '../styled';

export const Title = styled.h2`
  text-align: center;
  background: linear-gradient(233deg, rgb(162 198 255) 0%, rgb(28 28 30) 4%, rgb(186 24 178 / 73%) 100%);
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const ConverterSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;

  box-shadow: -28px -8px 100px 22px rgba(163, 67, 128, 0.3);
  border-radius: 10px;
  padding: 0 20px 20px;
  background-image: linear-gradient(
    122deg,
    rgba(225, 181, 181, 0.2),
    rgba(255, 64, 64, 0.37) 58.82%,
    rgba(188, 36, 157, 0.3568627450980392) 100%,
    rgba(186, 24, 178, 0.45)
  );
  background-origin: border-box;
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
