import React, {useState} from 'react';
import {Text} from 'react-native';
import CardsList from '../../components/Home/Features/Card';
import Header from '../../components/Home/Header';
import MoneyBalance from '../../components/Home/MoneyBalance';
import SelectFeatures from '../../components/Home/SelectFeatures';
import {Container, MainInfoContainer} from './styled';

const Home = () => {
  const [currentFeature, setCurrentFeature] = useState('Cards');

  return (
    <Container>
      <MainInfoContainer>
        <Header />
        <MoneyBalance />
        <SelectFeatures setFeature={setCurrentFeature} />
      </MainInfoContainer>
      {currentFeature === 'Cards' ? (
        <CardsList />
      ) : currentFeature === 'Transfer' ? (
        <Text>Tranfer</Text>
      ) : (
        <Text>Pix</Text>
      )}
    </Container>
  );
};

export default Home;
