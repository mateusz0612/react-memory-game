import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html {
    font-family: Arial, Helvetica, sans-serif;
    }

    @keyframes appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 100;
    }
}
`;

export default GlobalStyles;
