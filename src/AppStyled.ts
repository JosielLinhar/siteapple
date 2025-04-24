import styled from 'styled-components';

interface ImageOptionProductAppleType {
  widthImage?: string;
}

export const Header = styled.div`
  height: 48px;
  max-height: 44px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
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
  font-size: 13px;
  color: #f5f5f7;
  font-family: 'MyriadProLight';
  opacity: 0.8;
  cursor: pointer;
  letter-spacing: -0.01em;
`;

export const OptionsProductsApple = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 110px;
  gap: 30px;
`;

export const ItemOptionProductApple = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const ImageOptionProductApple = styled.img<ImageOptionProductAppleType>`
  width: ${(props) => (props.widthImage ? props.widthImage : '37px')};
`;

export const TextOptionProductApple = styled.a`
  font-family: 'MyriadProRegular';
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
`;

export const SpanNewOptionProductApple = styled.span`
  font-family: 'MyriadProRegular';
  color: #f56300;
  font-size: 10px;
  font-weight: 400;
  position: absolute;
  margin-top: 76px;
`;
