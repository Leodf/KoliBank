import {styled} from 'styled-components/native';

export const Container = styled.View`
  width: 85%;
  margin: 0 auto;
  border: 0px solid #373738;
  border-bottom-width: 2px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 120px;
  height: 30px;
`;

export const UserPhotoContainer = styled.View`
  width: 35px;
  height: 35px;
  border-radius: 18px;
  border: 1px solid #e53d41;
`;

export const UserPhotoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
  border-radius: 18px;
`;

export const Title = styled.Text`
  color: #fcfcfc;
  font-size: 30px;
`;

export const Span = styled.Text`
  color: #e53d41;
`;
