import { View, TextInput } from "react-native";
import React from "react";

type CustomInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const CustomInput: React.FC<CustomInputProps> = ({ value, onChangeText }) => {
  return (
    <View>
      <TextInput value={value} onChangeText={(text) => onChangeText(text)} />
    </View>
  );
};

export default CustomInput;
