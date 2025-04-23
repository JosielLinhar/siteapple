import styled from 'styled-components';

export const Header = styled.div`
  height: 48px;
  max-height: 44px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextHeader = styled.div`
  font-size: 12px;
  color: #f5f5f7;
  font-family: 'MyriadProLight';
  opacity: 0.8;
  cursor: pointer;
`;
