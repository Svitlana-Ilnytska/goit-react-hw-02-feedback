import React, { Component } from "react";

import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const count = e.target.textContent;
    this.setState((currentState) => ({
      [count]: currentState[count] + 1,
    }));
  };

 
  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};



  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    // const { options } = this.state;

    const total = good + neutral + bad;

    const positivePercentage = (good * 100) / total;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
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
