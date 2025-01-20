import { StyleSheet, Text, View } from "react-native";
import React from "react";
type HeaderProps = {
  children: string;
};
const Header = (props: HeaderProps) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
};

export default Header;
