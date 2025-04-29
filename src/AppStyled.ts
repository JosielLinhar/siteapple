import styled from 'styled-components';

interface ImageOptionProductAppleType {
  widthImage?: string;
  marginTop?: string;
}

interface SpanNewOptionProductAppleType {
  marginTop?: string;
  type?: string;
}

interface PurchaseButtonType {
  bgColor: string;
  color: string;
  underline?: boolean;
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
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
`;

export const TextOptionProductApple = styled.a`
  font-family: 'MyriadProRegular';
  color: rgba(0, 0, 0, 0.8);
  font-size: 12px;
`;

export const SpanNewOptionProductApple = styled.span<SpanNewOptionProductAppleType>`
  font-family: 'MyriadProRegular';
  color: #f56300;
  font-size: ${(props) => (props.type === 'span-new-option' ? '10px' : '17px')};
  font-weight: ${(props) =>
    props.type === 'span-new-option' ? '400' : 'bold'};
  position: ${(props) =>
    props.type === 'span-new-option' ? 'absolute' : 'relative'};
  margin-top: ${(props) => props.marginTop};
`;

export const AppleEducationBlock = styled.div`
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f7;
  margin-top: 20px;
  letter-spacing: -0.016em;

  p {
    font-family: 'MyriadProRegular';
    font-size: 14px;
    font-weight: 400;

    a {
      color: #06c;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

export const BannerArea = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  h1 {
    font-family: 'MyriadProRegular';
    font-size: 56px;
    color: #1d1d1f;
    font-weight: bold;
  }

  h2 {
    font-size: 28px;
    color: #1d1d1f;
    font-family: 'MyriadProRegular';
    font-weight: bold;
    margin-top: -30px;
  }

  p {
    font-size: 17px;
    color: #1d1d1f;
    font-family: 'MyriadProLight';
    font-weight: 600;
    margin-top: -2px;
  }
`;

export const PurchaseButton = styled.button<PurchaseButtonType>`
  font-size: 17px;
  line-height: 1.17648;
  color: ${(props) => props.color};
  font-weight: 400;
  font-family: 'MyriadProLight';
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  text-align: center;
  display: inline-block;
  white-space: nowrap;
  padding: 8px 16px;
  border-radius: 980px;
  border: none;

  &:hover {
    text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  }
`;

export const BannerAreaButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const BannerMacPro = styled.div`
  height: 615px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 54px 0;

  h1 {
    font-family: 'MyriadProRegular';
    font-size: 56px;
    color: white;
    font-weight: bold;
    margin-top: 2px;
  }

  h2 {
    font-size: 28px;
    color: white;
    font-family: 'MyriadProRegular';
    font-weight: bold;
    margin-top: -30px;
  }

  p {
    font-size: 17px;
    color: white;
    font-family: 'MyriadProLight';
    font-weight: 600;
    margin-top: -2px;
  }
`;
