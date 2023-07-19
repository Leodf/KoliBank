import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, FeatureBtn, FeatureBtnTxt} from './styles';

const SelectFeatures = ({setFeature}: any) => {
  return (
    <Container>
      <FeatureBtn
        onPress={() => {
          setFeature('Cards');
        }}>
        <FeatureBtnTxt>
          <MCIcon name="credit-card" size={20} color="#E53D41" /> Cartões
        </FeatureBtnTxt>
      </FeatureBtn>
      <FeatureBtn
        onPress={() => {
          setFeature('Transfer');
        }}>
        <FeatureBtnTxt>
          <MCIcon name="bank-transfer" size={20} color="#E53D41" /> Transferir
        </FeatureBtnTxt>
      </FeatureBtn>
      <FeatureBtn
        onPress={() => {
          setFeature('Pix');
        }}>
        <FeatureBtnTxt>
          <MCIcon name="bank-transfer-out" size={20} color="#E53D41" /> Pix
        </FeatureBtnTxt>
      </FeatureBtn>
    </Container>
  );
};

export default SelectFeatures;
