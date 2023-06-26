import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type ComponentProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: ComponentProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
