import React, { PureComponent } from "react";
import { Text, StyleSheet } from "react-native";
import { ApplicationStyles } from "../Themes/";
import PropTypes from "prop-types";

class TextBG extends PureComponent {
  static propTypes = {
    numberOfLines: PropTypes.number
  };
  static defaultProps = {
    numberOfLines: 1
  };

  render() {
    const { children, numberOfLines } = this.props;
    return (
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        style={[styles.sectionText, styles.darkBG]}
      >
        {children}
      </Text>
    );
  }
}
export default TextBG;

const styles = StyleSheet.create({ ...ApplicationStyles.screen });
