import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.90);
    position: fixed;
    display: flex;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: center;

  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;
