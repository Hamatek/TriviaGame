import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { withNavigation } from "react-navigation";

class BackBtn extends Component {
  render() {
    return (
      <Button
        title="Back"
        onPress={() => {
          this.props.navigation.goBack();
        }}
      />
    );
  }
}
export default withNavigation(BackBtn);
