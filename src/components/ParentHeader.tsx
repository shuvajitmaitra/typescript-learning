import { StyleSheet, Text, View } from "react-native";
import React from "react";
type ParentHeaderProps = {
  children: React.ReactNode;
};

const ParentHeader = ({ children }: ParentHeaderProps) => {
  return <>{children}</>;
};

export default ParentHeader;

const styles = StyleSheet.create({});
