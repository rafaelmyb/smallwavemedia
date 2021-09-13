import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --blue: #825AFD;

    --gray-100: #E1E1E6;
    --gray-300: #A8A8B3;
    --gray-400: #333333;
    --gray-500: #202024;
    --gray-600: #151518;
    --gray-700: #121214;
    --gray-800: #0F0F10;
    --gray-900: #09090A;

  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    color: var(--gray-100);

    &::-webkit-scrollbar {
      width: 8px;
    } 

    &::-webkit-scrollbar-track {
      background: var(--gray-700);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--gray-400);
    }
  }

  body, input, textarea, select, button {
    font: 500 1rem "Raleway", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
