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

    body {
    display: flex;
    justify-content: center;
    background-image: url("http://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-2.jpg");
    background-size: cover;
    background-position: center;
}
`;

export default GlobalStyles;
