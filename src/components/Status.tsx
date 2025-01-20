import { StyleSheet, Text, View } from "react-native";
import React from "react";
type StatusProps = {
  status: "loading" | "success" | "error";
};
const Status = (props: StatusProps) => {
  let status;
  switch (props.status) {
    case "loading":
      status = "loading...";
      break;
    case "success":
      status = "success";
      break;
    case "error":
      status = "Status is error";
      break;
    default:
      status = "Not defined";
  }

  return (
    <View>
      <Text>Status - {status}</Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
