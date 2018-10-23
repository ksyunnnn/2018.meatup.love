import React, { Component } from 'react';
import styled from 'styled-components';

import { Colors } from '../../variables';
import { media } from '../../helpers/media-query';

import { Anchor } from '../styled-components';

const ScheduleContentsContainer = styled.div`
  min-height: 92vh;
  line-height: 12vh;
  font-size: 4vh;
  padding: 28vh 0;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  > div{letter-spacing: 8px;}
  ${media.phone`
    text-align: left;
    min-height: auto;
    width: 100%;
    margin-bottom: 40px;
    padding: 24px 0;
    font-size: 5vw;
    line-height: 3;
  `};
`;

export default props => {
  return (
    <ScheduleContentsContainer id="schedule">
      <h1 style={{textAlign:'center'}}>スケジュール</h1>
      <div>準備/ 12:00-</div>
      <div>前半開始/ 13:00-</div>
      <div>後半開始/ 16:00-</div>
      <div>完全撤収/ 20:00(予定)</div>
    </ScheduleContentsContainer>
  );
};
