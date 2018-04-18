import { StackNavigator } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";
import QuestionScreen from "../Containers/QuestionScreen";
import ResultsScreen from "../Containers/ResultsScreen";

import styles from "./Styles/NavigationStyles";

const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    QuestionScreen: { screen: QuestionScreen },
    ResultsScreen: { screen: ResultsScreen }
  },
  {
    headerMode: "none",
    initialRouteName: "LaunchScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
