import React, { Component } from 'react';
import styled from "styled-components";

import { Chart } from 'primereact/components/chart/Chart';

import { Colors } from "../../variables";
import { media } from '../../helpers/media-query';

import {
  Anchor,
 } from '../styled-components';

const DataContainer = styled.div`
  min-height: 92vh;
  line-height: 8vh;
  box-sizing: border-box;
  width: 100%;
  ${media.phone`
    width: 100%;
    margin-bottom: 40px;
  `}
`;

const sample = {
    labels: ['エンジニア','デザイナー','学生'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    };

export default (props) => {
  const { information } = props;
  console.log(information)
  return (
    <DataContainer>
      {/*information.rolls.map((v,i)=>{
        console.log(v)
        return <span key={i}>{v.roll}</span>
      })*/}
      <Chart type="pie" data={sample} />
    </DataContainer>
  );
}
