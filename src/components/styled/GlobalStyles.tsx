import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap");

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html {
    font-family: Arial, Helvetica, sans-serif;
    }
`;

export default GlobalStyles;
