import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #181611;
    --dark-grey: #3a3a3a;
    --light-grey: #f5f5f5;
    --primary-green: #12403a;
    --primary-yellow: #b38a00;
    --secondary-blue: #33505c;
    --secondary-rose: #a13d34;
    --whitespace-primary: 2rem;
    --whitespace-secondary: 3rem;
    --layered-shadow: 0 1px 1px rgb(46 41 51 / 8%),
              0 2px 2px rgb(46 41 51 / 8%),
              0 4px 4px rgb(46 41 51 / 8%),
              0 8px 8px rgb(46 41 51 / 8%);
    --layered-shadow-small: 0px 2px 8px 0px rgba(99, 99, 99, 0.2),
              1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15);
    --transition: all 0.3s ease-in-out;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    background: var(--light-grey);
  }
  
  main {
    min-height: 100vh;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem var(--whitespace-primary);;
  }

  .m-top-3 {
    margin-top: var(--whitespace-secondary);
  }

  .m-top-4 {
    margin-top: 4rem;
  }

  .sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  :focus.sr-only {
    width: auto;
    height: auto;
    top: 2rem;
    left: 2rem;
    overflow: auto;
    clip: auto;
  }
`;

export default GlobalStyles;
