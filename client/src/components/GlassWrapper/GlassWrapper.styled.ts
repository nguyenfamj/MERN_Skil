import styled from 'styled-components';

export const GlassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: hidden;

  /* Media queries */
  @media (min-width: 640px) {
    width: 500px;
    height: 680px;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(100px);
    box-shadow: 20px 20px 100px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    border-color: rgba(255, 255, 255, 0.6);
    border-width: 1px;
    border-bottom: 0px;
    border-right: 0px;
    overflow: visible;
  }
`;
