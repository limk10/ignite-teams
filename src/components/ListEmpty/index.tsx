import { Container, Message } from "./styles";

type ComponentProps = {
  message: string;
};

export function ListEmpty({ message }: ComponentProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
