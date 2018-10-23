import React, { Component } from 'react';
import styled from 'styled-components';

import { Chart } from 'primereact/components/chart/Chart';

import { Colors } from '../../variables';
import { media } from '../../helpers/media-query';

import { Anchor } from '../styled-components';
import CountableStatistic from '../Shared/CountableStatistic';

import { Loader } from 'semantic-ui-react';

const DataContainer = styled.div`
  min-height: 92vh;
  line-height: 8vh;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  ${media.phone`
    width: 100%;
    margin-bottom: 40px;
  `};
`;

const CountableStatisticContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 768px;
  margin: 0 auto;
  padding: 40px 0;
  ${media.phone`
    padding: 24px 0;
  `};
`;

const ChartContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 40px 0;
  ${media.phone`
    padding: 24px 0;
  `};
`;

const CountableStatisticWrapper = styled.div`
  width: 160px;
  margin-bottom: 24px;
  padding: 4px;
  ${media.phone`
    width: 80px;
    margin-bottom: 8px;
    font-size: .8em;
  `};
`;

const genderFormatter = v => {
  const { male, female } = v;
  const rt = {
    labels: ['男性', '女性'],
    datasets: [
      {
        data: [male, female],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };
  return rt;
};

export default props => {
  const { information } = props;
  return (
    <DataContainer id="data">
      <h1 style={{textAlign:'center'}}>現在の参加者</h1>
      <CountableStatisticContainer>
        {information.rolls ? (
          information.rolls.map((v, i) => (
            <CountableStatisticWrapper key={i}>
              <CountableStatistic max={v.cnt} label={v.label} />
            </CountableStatisticWrapper>
          ))
        ) : (
          <Loader active>Loading</Loader>
        )}
      </CountableStatisticContainer>

      <ChartContainer>
        <Chart type="pie" data={genderFormatter(information)} />
      </ChartContainer>
    </DataContainer>
  );
};
