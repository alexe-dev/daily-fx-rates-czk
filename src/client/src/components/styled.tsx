import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  color: rgb(255, 255, 255);
  margin: 50px 0 20px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const mainGradient = css`
  background: linear-gradient(90deg, rgba(205, 36, 36, 1) 0%, rgba(49, 31, 198, 1) 51%, rgba(186, 24, 178, 1) 100%);
`;
