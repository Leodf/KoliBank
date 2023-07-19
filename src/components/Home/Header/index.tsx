import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
  Container,
  Span,
  Title,
  UserPhotoContainer,
  UserPhotoImage,
} from './styled';

const Header = () => {
  return (
    <Container>
      <Icon name="dots-three-vertical" size={40} color="#e53d41" />
      <Title>
        Koli
        <Span>Bank</Span>
      </Title>
      <UserPhotoContainer>
        <UserPhotoImage source={require('../../../../assets/user.png')} />
      </UserPhotoContainer>
    </Container>
  );
};

export default Header;
