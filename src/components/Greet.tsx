import { Text, View } from "react-native";
import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
};
const Greet = (props: GreetProps) => {
  return (
    <View>
      <Text>
        Hello {props.name}, You have {props.messageCount ?? 0} unread messages!
      </Text>
    </View>
  );
};

export default Greet;
