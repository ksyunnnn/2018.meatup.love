import React, { Component } from 'react';
import styled from 'styled-components';

import { Colors } from '../../variables';
import { media } from '../../helpers/media-query';

import { Anchor } from '../styled-components';

const InformationContainer = styled.div`
  min-height: 92vh;
  line-height: 12vh;
  font-size: 4vh;
  padding: 28vh 0;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
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

const info = [
  {
    anchor:
      'https://calendar.google.com/event?action=TEMPLATE&tmeid=MzNwZ2JoZDVvaGxkMTRuY2hxOWhraGNoOG4gaXMuc3l1bnN1a2Vrb2Jhc2hpQG0&tmsrc=is.syunsukekobashi%40gmail.com',
    icon: 'calendar plus outline icon',
    contents: <span>2018/07/22 Sun.</span>,
  },
  {
    anchor: 'https://goo.gl/maps/9dAeXLPXhJ22',
    icon: 'map marker alternate icon',
    contents: <span>世田谷区駒沢2-33-7 ( JamHouse 天照 )</span>,
  },
  {
    anchor: 'https://kyash.me/payments/pcVdAvhlK1RcdxC96ZzoVgDcX4g6',
    icon: 'yen sign icon',
    contents: <span>2,000円プラス持ち寄り食材</span>,
  },
  {
    anchor: 'http://twitter.com/hashtag/meatup2018',
    icon: 'hashtag icon',
    contents: <span>meatup2018</span>,
  },
];

const Information = props => (
  <div>
    <Anchor target="_blank" href={props.anchor}>
      <i className={props.icon} />
      {props.contents}
    </Anchor>
  </div>
);

export default props => {
  return (
    <InformationContainer id="information">
      <h1 style={{textAlign:'center'}}>概要</h1>
      {info.map((v, i) => <Information key={i} {...v} />)}
      <div>
        <Anchor href="/#schedule">
          <i className="time icon" />
          <span>13:00 or 16:00</span>
        </Anchor>
      </div>
    </InformationContainer>
  );
};
