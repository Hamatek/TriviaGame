import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Colors, Fonts } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  homeTitle: {
    ...Fonts.style.h1,
    fontWeight: "bold",
    color: Colors.snow,
    textAlign: "center"
  },

  background: {
    ...StyleSheet.AbsoluteFillStyle,
    width: "100%",
    height: "100%"
    // resizeMode: "cover"
  }
});
