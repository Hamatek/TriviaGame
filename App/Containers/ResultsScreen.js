import React, { Component } from "react";
import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import GameActions from "../Redux/GameRedux";
// Styles
import styles from "./Styles/ResultsScreenStyles";
import BackBtn from "../Components/BackBtn";
import R from "ramda";
import { AllHtmlEntities } from "html-entities";
import TypeWriter from "react-native-typewriter";
import Question from "../Components/Question";
import TextBG from "../Components/TextBG";
class ResultsScreen extends Component {
  render() {
    const { questions, answers, totalCorrect, totalQuestions } = this.props;

    return (
      <View style={styles.mainContainer}>
        <TextBG style={styles.darkLabel}>You Scored</TextBG>
        <TextBG style={styles.darkLabel}>
          {totalCorrect}/{totalQuestions}
        </TextBG>

        <FlatList
          data={questions}
          renderItem={this._renderQuestion}
          //keyExtractor={this._keyExtractor}
        />
        <View>
          <Button title="PLAY AGAIN" onPress={this._playAgain} />
        </View>
      </View>
    );
  }
  // _keyExtractor = ({ item, index }) => index;
  _renderQuestion = ({ item, index }) => {
    const isCorrect = this.props.answers[index].isCorrect;
    const questionNb = index + 1;
    return (
      <Question
        isCorrect={isCorrect}
        index={index}
        questionNb={questionNb}
        question={AllHtmlEntities.decode(item.question)}
      />
    );
  };
  _playAgain = () => {
    // this.props.navigation.navigate("LaunchScreen");
    this.props.requestQuestions();
  };
}

const mapStateToProps = state => {
  return {
    ...state.game
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestQuestions: params => dispatch(GameActions.triviaRequest(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
