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
