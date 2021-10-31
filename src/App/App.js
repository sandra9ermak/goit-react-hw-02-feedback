import Statistics from "../components/Feedback/Statistics";
import React from "react";
import FeedbackOptions from "../components/Feedback/FeedbackOptions";
import Title from "../components/Feedback/Title";
import Notification from "../components/Feedback/Notification";
import styles from "../components/Feedback/Feedback.module.css";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonFeedback = (event) => {
    this.setState((prevState) => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      Math.floor((this.state.good / this.countTotalFeedback()) * 100) + "%"
    );
  }

  render() {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <Title title="PLease leave feedback">
            <FeedbackOptions
              onLeaveFeedback={this.buttonFeedback}
              name={Object.keys(this.state)}
            ></FeedbackOptions>
          </Title>
          <Title title="Statistics">
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              ></Statistics>
            ) : (
              <Notification message="No feedback given"></Notification>
            )}
          </Title>
        </div>
      </section>
    );
  }
}

export default App;
