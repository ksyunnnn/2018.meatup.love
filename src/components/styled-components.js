import styled, { injectGlobal } from 'styled-components';
import { Colors } from '../variables';
import { media } from '../helpers/media-query';

injectGlobal`
  @font-face {
    font-family: 'Lato', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

export const GlobalWrapper = styled.div`
  max-width: 1450px;
  margin: 0 auto;
  padding: 4vh 4vw;
  border: 2vh solid ${Colors.oniku};
  height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
  ${media.phone`
    padding-bottom: 0;
  `};
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.between ? 'space-between' : 'none')};
`;

export const Image = styled.img`
  width: 100%;
`;

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  background: #eee;
  padding: 2px;
  border-radius: 2px;
  :hover,
  :active {
    background: #ccc;
    color: inherit;
  }
`;

export const DefaultContainer = styled.div`
  min-height: 92vh;
  line-height: 12vh;
  font-size: 4vh;
  padding: 28vh 0;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  word-wrap: break-word;
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

export const Button = styled.div`
  position: fixed;
  bottom: 48px;
  right: 48px;
  font-size: 36px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  background-color: #B33D44;
  color: #fff;
  font-weight: inherit;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #a0373d;
  }
  ${media.phone`
    bottom: 24px;
    right: 24px;
  `};
`;
