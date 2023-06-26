import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

import logoImg from "@assets/logo.png";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;

export const Logo = styled.Image.attrs(({ theme }) => ({
  source: logoImg,
}))`
  width: 46px;
  height: 55px;
`;
