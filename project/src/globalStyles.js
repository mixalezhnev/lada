import { injectGlobal } from 'styled-components';

import ladaRegular from './fonts/LADA_Pragmatica-Regular.otf';
import ladaItalic from './fonts/LADA_Pragmatica-Italic.otf';
import ladaBold from './fonts/LADA_Pragmatica-Bold.otf';

/* tslint:disable */
injectGlobal`
  *, ::after, ::before {
    box-sizing: border-box;
    padding: 0;
  }

  @font-face {
    font-family: 'Lada';
    src: url(${ladaRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lada-Bold';
    src: url(${ladaBold}) format('truetype');
  }

  @font-face {
    font-family: 'Lada-Italic';
    src: url(${ladaItalic}) format('truetype');
  }

  html {
    font-family: 'Lada', sans-serif;
    font-size: 62.5%;
  }

  body {
    position: relative;
    font-size: 1.8rem;
    line-height: 1.82857143;
  }

  button {
    font-size: 1.8rem;
  }

  html, body, #root {
    margin:0;
    padding:0;
    width: 100vw;
    max-width: 100%;
    height: 100%;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export default '';
