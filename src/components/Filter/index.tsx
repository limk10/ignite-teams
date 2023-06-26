import { Container, FilterStyleProps, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type ComponentProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActived = false, ...rest }: ComponentProps) {
  return (
    <Container isActived={isActived} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
