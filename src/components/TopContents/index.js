import React, { Component } from 'react';
import styled from "styled-components";

import { Colors } from "../../variables";
import { media } from '../../helpers/media-query';

import { Transition } from 'semantic-ui-react';

import OnikuImage from '../../asset/oniku.svg';
import OnikuCur from '../../asset/oniku.cur';

import {
  FlexWrapper,
  Image,
 } from '../styled-components';

const TopContainer = styled.div`
  width: 100%;
  ${media.phone`
    width: 100%;
    margin-bottom: 40px;
  `}
`;

const MainTitle = styled.div`
  font-size: 8em;
  line-height: 24vh;
  ${media.phone`
    font-size: 14vw;
    line-height: 1;
  `}
`;

const MainOniku = styled.div`
  width: 48vw;
  cursor: url(${OnikuCur}), auto;
  ${media.phone`
  `}
`;

export default (props) => {
  const { oniku } = props.visibles;
  return (
    <TopContainer>
      <FlexWrapper between>
        <MainTitle>Me<span style={{color: `${Colors.oniku}`}}>a</span>t Up<br />2018</MainTitle>
        <MainOniku>
          <Transition animation="jiggle" duration={1000} mountOnShow={true} visible={oniku} transitionOnMount>
            <Image src={OnikuImage} onMouseOver={()=>props.toggleVisibles('oniku')}/>
          </Transition>
        </MainOniku>
      </FlexWrapper>
    </TopContainer>
  );
}
