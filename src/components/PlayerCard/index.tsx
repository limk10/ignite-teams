import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Name } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";

type ComponentProps = TouchableOpacityProps & {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove, ...rest }: ComponentProps) {
  return (
    <Container {...rest}>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon onPress={onRemove} icon="close" type="SECONDARY" />
    </Container>
  );
}
