import React from 'react';
import {
  Card,
  ExpirationCvvContainer,
  FieldContainer,
  FieldContent,
  FieldTitle,
  FlagContainer,
  FlagImage,
} from './styles';

const CardItem = ({card}: any) => {
  return (
    <Card>
      <FlagContainer>
        {card.flag === 'visa' ? (
          <FlagImage source={require('../../../../../../assets/visa.png')} />
        ) : (
          <FlagImage source={require('../../../../../../assets/master.png')} />
        )}
      </FlagContainer>
      <FieldContainer>
        <FieldTitle>Número do cartão:</FieldTitle>
        <FieldContent>{card.number}</FieldContent>
      </FieldContainer>
      <ExpirationCvvContainer>
        <FieldContainer>
          <FieldTitle>Expira:</FieldTitle>
          <FieldContent>{card.expirationDate}</FieldContent>
        </FieldContainer>
        <FieldContainer>
          <FieldTitle>CVV:</FieldTitle>
          <FieldContent>{card.cvv}</FieldContent>
        </FieldContainer>
      </ExpirationCvvContainer>
    </Card>
  );
};

export default CardItem;
