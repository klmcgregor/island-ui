import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
`;

export default GlobalCSS;

