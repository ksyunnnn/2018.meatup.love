import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react';

export default class CountableStatistic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      max: props.max,
    };
  }

  countUp = (exec, max) => {
    let count = 0;
    let speed = 100;
    const countHandle = setInterval(() => {
      exec();
      if (count++ > max - 2) clearInterval(countHandle);
    }, speed);
  };

  componentDidMount() {
    this.countUp(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, this.state.max);
  }

  render() {
    return <Statistic label={this.props.label} value={this.state.count} />;
  }
}
