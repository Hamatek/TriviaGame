import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import GameActions from "../Redux/GameRedux";
// Styles
import styles from "./Styles/LaunchScreenStyles";
import BackBtn from "../Components/BackBtn";
import R from "ramda";
import { Images } from "../Themes";
import TextBG from "../Components/TextBG";
class LaunchScreen extends Component {
  render() {
    console.log(this.props.game);

    return (
      <ImageBackground
        style={styles.background}
        source={Images.backgrounds.olympus}
      >
        <TextBG>Welcome to the Trivia Challenge</TextBG>
        <TextBG numberOfLines={2}>
          You will be presented with 10 True or False questions.
        </TextBG>
        <TextBG>Can you score 100%?</TextBG>

        {this.props.isFetching ? (
          <View>
            <TextBG>Loading your quizz...</TextBG>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <Button title="BEGIN" onPress={this._getQuestions} />
        )}
      </ImageBackground>
    );
  }
  _getQuestions = () => {
    this.props.requestQuestions();
  };
}

const mapStateToProps = state => {
  return { isFetching: state.game.fetching };
};

const mapDispatchToProps = dispatch => {
  return {
    requestQuestions: params => dispatch(GameActions.triviaRequest(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
