import { View, Text } from "react-native";
import React from "react";
import Person from "./Person";

type PersonListProps = {
  names: { first: string; last: string }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <View>
      {props.names.map((name) => (
        <Person key={name.first} name={name} />
      ))}
    </View>
  );
};

export default PersonList;
