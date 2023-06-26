import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type IconProps = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  min-height: 56px;
  max-height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
  padding: 0 10px;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, type }) => ({
    size: 32,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
