import { Container, SubTitle, Title } from "./styles";

type ComponentProps = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: ComponentProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
