import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  typeWriter: {
    fontWeight: "bold",
    padding: 10,
    fontSize: 20,
    textAlign: "center"
  },
  questionContainer: {
    backgroundColor: "gold",
    borderWidth: 1,
    borderColor: "black",
    height: 200,
    width: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  quizContainer: {
    ...ApplicationStyles.screen.mainContainer,
    justifyContent: "center",
    alignItems: "center"
  },
  answersContainer: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});
