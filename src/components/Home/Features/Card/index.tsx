import React from 'react';
import {Dimensions, FlatList} from 'react-native';
import CardItem from './CardItem';
import {Container, Title} from './styles';

const Cards = [
  {
    id: 1,
    number: '0125 4568 3619 6978',
    expirationDate: '04/2025',
    cvv: '456',
    flag: 'master',
  },
  {
    id: 2,
    number: '1234 5678 9101 2134',
    expirationDate: '03/2030',
    cvv: '123',
    flag: 'visa',
  },
  {
    id: 3,
    number: '3568 4679 1254 6589',
    expirationDate: '04/2025',
    cvv: '875',
    flag: 'visa',
  },
  {
    id: 4,
    number: '1235 4587 6798 4568',
    expirationDate: '04/2025',
    cvv: '698',
    flag: 'master',
  },
];

const width = Dimensions.get('window').width;

const CardsList = () => {
  const renderItem = ({item}: any) => <CardItem card={item} key={item.id} />;

  return (
    <Container>
      <Title>Meus Cartões</Title>
      <FlatList<any>
        data={Cards}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment={'start'}
        scrollEventThrottle={16}
        decelerationRate={'normal'}
        snapToOffsets={[...Array(Cards.length)].map(
          (x, i) => i * (width * 0.9 - 40) + (i - 1) * 40,
        )}
      />
    </Container>
  );
};

export default CardsList;
