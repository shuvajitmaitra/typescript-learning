import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Greet from "@/src/components/Greet";
import Person from "@/src/components/Person";
import PersonList from "@/src/components/PersonList";
import Status from "@/src/components/Status";
import Header from "@/src/components/Header";
import ParentHeader from "@/src/components/ParentHeader";
import CustomButton from "@/src/components/Custombutton";

interface HomeScreenProps {
  name: {
    first: string;
    last: string;
  };
  names: {
    first: string;
    last: string;
  }[];
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const name = {
    first: "Shuvajit",
    last: "Maitra",
  };
  const names = [
    {
      first: "Shuvajit",
      last: "Maitra",
    },
    {
      first: "Sabuj",
      last: "Majumder",
    },
    {
      first: "Sachin",
      last: "Mukharjee",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={"transparent"} />
      <Greet name="Shuvajit" messageCount={10} />
      <Person name={name} />
      <PersonList names={names} />
      <Status status="success" />
      <Header>Hello, I am a header</Header>
      <ParentHeader>
        <Header>Hello, I am Parent Header</Header>
      </ParentHeader>
      <CustomButton title="Click me" handleClick={(event, id) => console.log(event, id)} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#999",
  },
});
