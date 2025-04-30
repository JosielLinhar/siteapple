import React, { useState } from 'react';
import './fonts.css';
import {
  Header,
  ItemHeader,
  TextHeader,
  OptionsProductsApple,
  ItemOptionProductApple,
  ImageOptionProductApple,
  TextOptionProductApple,
  SpanNewOptionProductApple,
  AppleEducationBlock,
  BannerArea,
  PurchaseButton,
  BannerAreaButtons,
  BannerMacPro,
  SelectMac,
  OptionsMac,
  OptionType,
} from './AppStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {
  faMagnifyingGlass,
  faBagShopping,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import iMac from './assets/images/iMac.svg';
import macAcessories from './assets/images/macAcessories.svg';
import macbookAir from './assets/images/macbookAir.svg';
import macbookPro from './assets/images/macbookPro.svg';
import macCompare from './assets/images/macCompare.svg';
import macDisplays from './assets/images/macDisplays.svg';
import macMini from './assets/images/macMini.svg';
import macOs from './assets/images/macOs.svg';
import macPro from './assets/images/macPro.svg';
import macShop from './assets/images/macShop.svg';
import macStudio from './assets/images/macStudio.svg';
import macbook from './assets/images/macbook.jpeg';
import macpro from './assets/images/macpro.jpeg';

function App() {
  const [optionMac, setOptionMac] = useState<boolean>(true);

  return (
    <div>
      <Header>
        <ItemHeader>
          <FontAwesomeIcon
            style={{
              color: '#f5f5f7',
              fontSize: '13px',
              opacity: '0.8',
              cursor: 'pointer',
            }}
            icon={faApple}
          />
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Loja</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Mac</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>iPad</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>iPhone</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Watch</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>AirPods</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>TV e Casa</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Só na Apple</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Acessórios</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <TextHeader>Suporte</TextHeader>
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon
            style={{
              color: '#f5f5f7',
              fontSize: '13px',
              opacity: '0.8',
              cursor: 'pointer',
            }}
            icon={faMagnifyingGlass}
          />
        </ItemHeader>

        <ItemHeader>
          <FontAwesomeIcon
            style={{
              color: '#f5f5f7',
              fontSize: '13px',
              opacity: '0.8',
              cursor: 'pointer',
            }}
            icon={faBagShopping}
          />
        </ItemHeader>
      </Header>

      <OptionsProductsApple>
        <ItemOptionProductApple>
          <ImageOptionProductApple
            src={macbookAir}
            widthImage="88px"
            alt="macbook-air"
          />
          <TextOptionProductApple>MacBook Air</TextOptionProductApple>
          <SpanNewOptionProductApple marginTop="76px" type="span-new-option">
            Novo
          </SpanNewOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple
            src={macbookPro}
            widthImage="88px"
            alt="macbook-pro"
          />
          <TextOptionProductApple>MacBook Pro</TextOptionProductApple>
          <SpanNewOptionProductApple marginTop="76px" type="span-new-option">
            Novo
          </SpanNewOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple src={iMac} widthImage="45px" alt="iMac" />
          <TextOptionProductApple>iMac de 24 pol.</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple
            src={macMini}
            widthImage="30px"
            alt="mac-mini"
          />
          <TextOptionProductApple>Mac mini</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple
            src={macStudio}
            widthImage="30px"
            alt="mac-studio"
          />
          <TextOptionProductApple>Mac Studio</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple src={macPro} alt="mac-pro" />
          <TextOptionProductApple>Mac Pro</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple
            src={macCompare}
            widthImage="50px"
            alt="mac-compare"
          />
          <TextOptionProductApple>Comparar</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple
            src={macDisplays}
            widthImage="83px"
            alt="mac-displays"
          />
          <TextOptionProductApple>Monitores</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple
            src={macAcessories}
            widthImage="38px"
            alt="mac-acessories"
          />
          <TextOptionProductApple>Acessórios</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple src={macOs} widthImage="41px" alt="macOs" />
          <TextOptionProductApple>Monterey</TextOptionProductApple>
        </ItemOptionProductApple>

        <ItemOptionProductApple>
          <ImageOptionProductApple
            src={macShop}
            widthImage="120px"
            alt="mac-shop"
          />
          <TextOptionProductApple>Comprar Mac</TextOptionProductApple>
        </ItemOptionProductApple>
      </OptionsProductsApple>

      <AppleEducationBlock>
        <p>
          Economize na compra do MacBook Pro de 13 polegadas na Apple Store
          Educacional*.{' '}
          <a href="https://apple.com.br">
            Comprar{' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '10px' }}
            />
          </a>
        </p>
      </AppleEducationBlock>

      <BannerArea>
        <SpanNewOptionProductApple>Novo</SpanNewOptionProductApple>
        <h1>MacBook Air</h1>
        <h2>Livre, leve e voa.</h2>
        <p>A partir de R$ 13.999</p>

        <BannerAreaButtons>
          <PurchaseButton bgColor="#0071e3" color="white">
            Comprar
          </PurchaseButton>

          <PurchaseButton
            bgColor="transparent"
            underline={true}
            color="#0071e3"
          >
            Saiba mais{' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '11px', marginLeft: '5px' }}
            />
          </PurchaseButton>
        </BannerAreaButtons>

        <ImageOptionProductApple
          src={macbook}
          widthImage="450px"
          marginTop="75px"
          alt="Macbook Air"
        />
      </BannerArea>

      <BannerMacPro>
        <SpanNewOptionProductApple marginTop="45px">
          Novo
        </SpanNewOptionProductApple>
        <h1>MacBook Pro de 13 pol.</h1>
        <h2>Pro em qualquer lugar.</h2>
        <p>A partir de R$ 15.299</p>

        <BannerAreaButtons>
          <PurchaseButton bgColor="#0071e3" color="white">
            Comprar
          </PurchaseButton>

          <PurchaseButton
            bgColor="transparent"
            underline={true}
            color="#0071e3"
          >
            Saiba mais{' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: '11px', marginLeft: '5px' }}
            />
          </PurchaseButton>
        </BannerAreaButtons>

        <ImageOptionProductApple
          src={macpro}
          widthImage="900px"
          marginTop="15px"
          alt="Macbook Pro"
        />
      </BannerMacPro>

      <SelectMac>
        <h1>Qual é o Mac ideal para você?</h1>

        <OptionsMac>
          <OptionType
            onClick={() => setOptionMac(!optionMac)}
            selected={optionMac}
            width="75px"
          >
            Notebook
          </OptionType>

          <OptionType
            onClick={() => {
              setOptionMac(!optionMac);
            }}
            selected={!optionMac}
            width="60px"
            right
          >
            Desktop
          </OptionType>
        </OptionsMac>
      </SelectMac>
    </div>
  );
}

export default App;
