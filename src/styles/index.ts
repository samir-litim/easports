import { StyleSheet } from "react-native";

const VALUES = [1, 2, 3, 4, 5, 6];
const DIRECTIONS = [
  {
    name: "t",
    value: "Top"
  },
  {
    name: "b",
    value: "Bottom"
  },
  {
    name: "l",
    value: "Left"
  },
  {
    name: "r",
    value: "Right"
  },
  {
    name: "x",
    value: ["Left", "Right"]
  },
  {
    name: "y",
    value: ["Top", "Bottom"]
  }
];

const ATTRIBUTE = [
  {
    name: "m",
    value: "margin"
  },
  {
    name: "p",
    value: "padding"
  }
];

const spacingStyles = VALUES.reduce((acc, value) => {
  DIRECTIONS.forEach((direction) => {
    ATTRIBUTE.forEach((attribute) => {
      acc[`${attribute.name}${direction.name}-${value}`] = Array.isArray(
        direction.value
      )
        ? direction.value.reduce((acc, directionValue) => {
            return {
              ...acc,
              [`${attribute.value}${directionValue}`]: value * 5
            };
          }, {})
        : {
            [`${attribute.value}${direction.value}`]: value * 5
          };
    });
  });
  return acc;
}, {}) as { [key: string]: any };

export const globalStyles = StyleSheet.create({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 12,
    backgroundColor: "#fff"
  },
  primary: {
    backgroundColor: "#c44d4d"
  },
  danger: {
    backgroundColor: "#FF5151"
  },
  success: {
    backgroundColor: "#3AA76D"
  },
  title1: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20
  },
  title2: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  small: {
    fontSize: 16,
    marginBottom: 10
  },
  flexCenter: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 10 // Optional: Add some padding on the sides
  },
  buttonOutlined: {
    margin: 5,
    borderWidth: 1,
    borderColor: "#8cb1ed",
    backgroundColor: "#8cb1ed",
    color: "white"
  },
  ...spacingStyles
});
