import { Button, GestureResponderEvent } from "react-native";
import React from "react";

type CustomButtonProps = {
  title: string;
  handleClick: (event: GestureResponderEvent, id: number) => void;
};

const CustomButton = (props: CustomButtonProps) => {
  return <Button title={props.title} onPress={(event) => props.handleClick(event, 1)} />;
};

export default CustomButton;
