import React, { PureComponent } from "react";
import { Text, StyleSheet } from "react-native";

class Question extends PureComponent {
  render() {
    const { isCorrect, index, questionNb, question } = this.props;
    return (
      <Text
        key={index}
        style={[styles.question, !isCorrect ? styles.inCorrect : ""]}
      >
        [{questionNb}] - {question}
      </Text>
    );
  }
}
export default Question;

const styles = StyleSheet.create({
  question: {
    fontWeight: "bold",
    backgroundColor: "white",
    padding: 5,
    marginBottom: 5,
    color: "green"
  },
  inCorrect: {
    color: "red"
  }
});
