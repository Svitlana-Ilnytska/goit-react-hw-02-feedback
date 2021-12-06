import React, { Component } from "react";

import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: "",
  };

  handleIncrementGood = () => {
    this.setState((currentState) => {
      return {
        good: currentState.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    this.setState((currentState) => {
      return {
        neutral: currentState.neutral + 1,
      };
    });
  };

  handleIncrementBad = () => {
    this.setState((currentState) => {
      return {
        bad: currentState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {};

  // countPositiveFeedbackPercentage = () => {};

  // countPositiveFeedbackPercentage = (good, total) => {
  //   const differencePercentage = (good * 100) / total;
  //   if (Number.isNaN(differencePercentage)) {
  //     return "";
  //   } else return differencePercentage;
  // };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const total = good + neutral + bad;

    const positivePercentage = (good * 100) / total;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onIncrementGood={this.handleIncrementGood}
            onIncrementNeutral={this.handleIncrementNeutral}
            onIncrementBad={this.handleIncrementBad}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
