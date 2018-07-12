import React, { Component } from 'react';
import styled from 'styled-components';

import { Chart } from 'primereact/components/chart/Chart';

import { Colors } from '../../variables';
import { media } from '../../helpers/media-query';

import { Anchor } from '../styled-components';

import { Statistic } from 'semantic-ui-react'


const DataContainer = styled.div`
  min-height: 92vh;
  line-height: 8vh;
  box-sizing: border-box;
  width: 100%;
  ${media.phone`
    width: 100%;
    margin-bottom: 40px;
  `};
`;

const genderFormatter = v => {
  const { male, female } = v;
  const rt = {
    labels: ['男性','女性'],
    datasets: [
      {
        data: [male,female],
        backgroundColor: ['#36A2EB', '#FF6384',],
        hoverBackgroundColor: ['#36A2EB', '#FF6384',],
      },
    ],
  }
  return rt;
}

const rollsFormatter = v => {
  const { rolls } = v;
  console.log("rolls is ",rolls);
  const rt = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#36A2EB', '#FF6384','#36A2EB', '#FF6384','#36A2EB', '#FF6384','#36A2EB', '#FF6384','#36A2EB', '#FF6384',],
        hoverBackgroundColor: ['#36A2EB', '#FF6384','#36A2EB', '#FF6384','#36A2EB', '#FF6384','#36A2EB', '#FF6384','#36A2EB', '#FF6384',],
      },
    ],
  }
  if(rolls){
    const labels = [];
    const cnts = [];
    rolls.map(v=>{
      labels.push(v.label);
      cnts.push(v.cnt);
    });
    rt.labels = labels;
    console.log('labels',labels);
    rt.datasets[0].data = cnts;
  }
  return rt;
}

class CountableStatistic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countUp = (exec,max) => {
    let count = 0;
    const countHandle = setInterval(()=>{
      exec();
      if(count++>max-2)clearInterval(countHandle);
    },50);
  }

  componentDidMount() {

    this.countUp(
      ()=>{
        this.setState(prevState => ({
          count: prevState.count+ 1,
        }));
      },this.props.max);

  }

  render() {
    return (<Statistic label='Downloads' value={this.state.count} />)
  }
}

export default props => {
  const { information } = props;
  console.log("formated",rollsFormatter(information))
  return (
    <DataContainer id="data">
      {/*information.rolls.map((v,i)=>{
        console.log(v)
        return <span key={i}>{v.roll}</span>
      })*/}
      <Chart type="pie" data={genderFormatter(information)} />
      <CountableStatistic max={300}/>
    </DataContainer>
  );
};
