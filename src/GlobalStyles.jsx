import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'; // style-reset 패키지

const GlobalStyles = createGlobalStyle` 
    ${reset}
    .a11y-hidden,
        legend {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: polygon(0 0, 0 0, 0 0);
    }
        *,
        *::before,
        *::after {
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: Lexend, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: white;
        color: black;
    }
`;

export default GlobalStyles;
