import { View, Text } from "react-native";
import React from "react";
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
const Person = (props: PersonProps) => {
  return (
    <View>
      <Text>
        {props.name.first} {props.name.last}
      </Text>
    </View>
  );
};

export default Person;
