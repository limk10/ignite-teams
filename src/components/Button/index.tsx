import { ButtonTypeStyleProps, Container, Text } from "./styles";
import { TouchableOpacityProps } from "react-native";

type ComponentProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: ComponentProps) {
  return (
    <Container type={type} {...rest}>
      <Text>{title}</Text>
    </Container>
  );
}
