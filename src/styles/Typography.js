import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  body {
    color: var(--black);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    line-height: 1.7;
    letter-spacing: 0.1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Shadows Into Light', sans-serif;
    font-weight: normal;
    margin: 0;
    line-height: 1.5;
    letter-spacing: 0.25rem;
  }

  a {
    color: var(--dark-grey);
    text-decoration-color: var(--secondary-rose);
    text-decoration-thickness: 0.2rem;

    &:hover {
      color: var(--black);
    }
  }

  .nav-link {
    padding: 0.5rem;
    display: inline-block;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      text-decoration: underline var(--secondary-rose);
    }
  }

  .center {
    text-align: center;
  }

  ul {
    list-style: square;
  }

  .ul-plain {
    margin: 0;
    margin-top: 1.5rem;
    padding: 0;
    list-style: none;
  }

  .ul-links {
    display: flex;
    flex-direction: row;
    gap: var(--whitespace-primary);
  }
`;

export default Typography;
