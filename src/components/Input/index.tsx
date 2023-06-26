import { TextInput, TextInputProps } from "react-native";
import { InputText } from "./styles";
import { useTheme } from "styled-components/native";

type ComponentProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: ComponentProps) {
  return <InputText ref={inputRef} {...rest}></InputText>;
}
