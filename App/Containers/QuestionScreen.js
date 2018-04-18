import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import GameActions from "../Redux/GameRedux";
// Styles
import styles from "./Styles/QuestionScreenStyles";
import BackBtn from "../Components/BackBtn";
import R from "ramda";
import { AllHtmlEntities } from "html-entities";
import TypeWriter from "react-native-typewriter";
import TextBG from "../Components/TextBG";
class QuestionScreen extends Component {
  render() {
    const { questions, totalQuestions, questionIndex } = this.props;
    const currentQuestion = questions[questionIndex];
    return (
      <View style={styles.quizContainer}>
        <TextBG>{currentQuestion.category}</TextBG>
        <TextBG>
          {questionIndex + 1}/{totalQuestions}
        </TextBG>
        <View style={styles.questionContainer}>
          <TypeWriter typing={1} style={styles.typeWriter}>
            {AllHtmlEntities.decode(currentQuestion.question)}
          </TypeWriter>
        </View>

        <View style={styles.answersContainer}>
          {/* this container should be replace with something more dynamic/design/user friendly  to handle all cases like multiple answers and it should avoid using bind inline for performance purpose   */}
          <View>
            <Button
              title="true"
              onPress={this._submitAnswer.bind(null, true)}
            />
          </View>
          <View>
            <Button
              title="false"
              onPress={this._submitAnswer.bind(null, false)}
            />
          </View>
        </View>
      </View>
    );
  }
  _submitAnswer = answer => {
    this.props.submitAnswer(answer);
    this._nextQ();
  };
  _nextQ = () => {
    if (this.props.questionIndex + 1 === this.props.totalQuestions) {
      this.props.navigation.navigate("ResultsScreen");
    } else {
      this.props.nextQuestion();
    }
  };
}

const mapStateToProps = state => {
  return {
    ...state.game
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestQuestions: params => dispatch(GameActions.userRequest(params)),
    submitAnswer: data => dispatch(GameActions.submitAnswer(data)),
    nextQuestion: data => dispatch(GameActions.nextQuestion(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
