import React, { Component } from 'react';
import styled from "styled-components";

import { Colors } from "../../variables";
import { media } from '../../helpers/media-query';

import {
  Anchor,
 } from '../styled-components';

const InformationContainer = styled.div`
  min-height: 92vh;
  line-height: 12vh;
  font-size: 4vh;
  padding: 28vh 0;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  ${media.phone`
    width: 100%;
    margin-bottom: 40px;
  `}
`;

const info = [
  {
    anchor: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=MzNwZ2JoZDVvaGxkMTRuY2hxOWhraGNoOG4gaXMuc3l1bnN1a2Vrb2Jhc2hpQG0&tmsrc=is.syunsukekobashi%40gmail.com',
    icon: 'calendar plus outline icon',
    contents: <span>2018/07/22 Sun.</span>,
  },
  {
    anchor: 'https://goo.gl/maps/9dAeXLPXhJ22',
    icon: 'map marker alternate icon',
    contents: <span>世田谷区駒沢2-33-7 ( JamHouse 天照 )</span>,
  },
  {
    anchor: 'http://twitter.com/hashtag/meatup2018',
    icon: 'hashtag icon',
    contents: <span>meatup2018</span>,
  },
]

const Information = props => (
  <div>
    <Anchor target="_blank" href={props.anchor}>
      <i className={props.icon}></i>{props.contents}
    </Anchor>
  </div>
)

export default (props) => {
  return (
    <InformationContainer id="information">
      {info.map(
        (v,i)=><Information key={i} {...v}/>
      )}
    </InformationContainer>
  );
}
