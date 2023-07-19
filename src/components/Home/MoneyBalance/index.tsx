import React, {useState} from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Container, DefaultText, RowContainer} from './styled';

const MoneyBalance: React.FC = () => {
  const [seeMoney, setSeeMoney] = useState(false);

  const handleToggleSeeMoney = () => {
    setSeeMoney(!seeMoney);
  };

  return (
    <Container>
      <View>
        <DefaultText>Saldo Atual</DefaultText>
        {!seeMoney ? (
          <RowContainer>
            <DefaultText>****</DefaultText>
            <Ionicons
              name="eye-off-outline"
              size={24}
              color="#e53d41"
              style={{marginLeft: 10}}
              onPress={handleToggleSeeMoney}
            />
          </RowContainer>
        ) : (
          <>
            <RowContainer>
              <DefaultText>R$ 5.000,00</DefaultText>
              <Ionicons
                name="eye-outline"
                size={24}
                color="#e53d41"
                style={{marginLeft: 10}}
                onPress={handleToggleSeeMoney}
              />
            </RowContainer>
          </>
        )}
      </View>
      <RowContainer>
        <DefaultText>Ver detalhes</DefaultText>
        <MIcon
          name="keyboard-arrow-right"
          size={24}
          color="#e53d41"
          style={{marginLeft: 5}}
          onPress={() => {}}
        />
      </RowContainer>
    </Container>
  );
};

export default MoneyBalance;
