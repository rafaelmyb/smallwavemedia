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

    scrollbar-color: #68777b #0f0f10;
    scrollbar-width: 12px;
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
    color: var(--white);
    -webkit-font-feature-settings: "lnum";
    -moz-font-feature-settings: "lnum";
    font-feature-settings: "lnum";

    &::-webkit-scrollbar {
      width: 12px;
    } 

    &::-webkit-scrollbar-track {
      background: #0f0f10;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #68777b;
      border-radius: 20px;
      border: 3px solid #0f0f10;
    }

    h1 {
      font-size: 2.875rem;
      font-weight: 800;
      line-height: 3.4375rem;
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
