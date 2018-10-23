import React, { Component } from 'react';

import { GlobalWrapper,  DefaultContainer, Button } from './components/styled-components';
import TopContents from './components/TopContents';
import InformationContents from './components/InformationContents';
import DataContents from './components/DataContents';
import ScheduleContents from './components/ScheduleContents';

import { Transition } from 'semantic-ui-react';

const getInformation = data => {
  const rt = {
    male: 0,
    female: 0,
    jobs: [],
    rolls: [],
  };

  const gender = data.filter(v => v.property == 'gender');

  gender.map(v => {
    if (v.label == '男性') rt.male = v.cnt;
    if (v.label == '女性') rt.female = v.cnt;
  });

  const jobs = data.filter(v => v.property == 'job');

  jobs.map(v => {
    rt.jobs.push(v.label);
  });

  const rolls = data.filter(v => v.property == 'roll');

  rolls.map(v => {
    delete v.property;
  });

  rt.rolls = rolls;

  return rt;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      visibles: {
        oniku: true,
        top: true,
        info: false,
      },
      information: {},
    };
  }

  toggleVisibles = name =>
    this.setState(prevState => {
      const newState = prevState;

      newState.visibles[name] = !prevState.visibles[name];
      return newState;
    });

  componentDidMount() {
    fetch(
      'https://script.google.com/macros/s/AKfycbzTGs01F0kNoSvNdSjEt2ZXeZ4FO2EDFGtjtgHWyb9GXSuJNM1U/exec',
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            information: getInformation(result.filter(v => v.property !== 'ignore')),
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { top, info } = this.state.visibles;
    return (
      <GlobalWrapper>
        <TopContents visibles={this.state.visibles} toggleVisibles={this.toggleVisibles} />
        <InformationContents />
        <DataContents information={this.state.information} />
        <ScheduleContents />

        <DefaultContainer>
          <h1 style={{textAlign:'center'}}>支払い方法</h1>
          <div>送金アプリ「Kyash」を利用ください</div>
          <small>※送金後、運営に連絡を<b>必ず</b>行ってください🙇</small>
          <div><a target="_blank" href="https://kyash.me/payments/pcVdAvhlK1RcdxC96ZzoVgDcX4g6">https://kyash.me/payments/pcVdAvhlK1RcdxC96ZzoVgDcX4g6</a></div>
        </DefaultContainer>

        <Button onClick={()=>window.open('https://m.me/ksyunnnn')}><i className="facebook messenger icon"></i></Button>

      </GlobalWrapper>
    );
  }
}

export default App;
