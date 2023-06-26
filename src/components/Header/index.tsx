import { CaretLeft } from "phosphor-react-native";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";

type ComponentTypes = {
  showBackButton?: boolean;
};

export function Header({ showBackButton }: ComponentTypes) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo />
    </Container>
  );
}
