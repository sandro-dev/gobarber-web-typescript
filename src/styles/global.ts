import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Roboto Slab, sans-serif;
      font-weight: 500;
      font-size: 16px;

      background: #3d3d4d;
      color: #fff;
    }

    input { border: 0; }

    h1, h2, h3, h4, h5, h6, button {
      font-family: Roboto Slab, sans-serif;
      font-weight: 500;
      font-size: 16px;
    }
    
    button {
      cursor: pointer;
    }
`;