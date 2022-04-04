import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const HeaderStyles = styled.header`
  h1 {
    font-size: clamp(3rem, 7vw, 5rem);
    margin: 0.5rem 0;
    position: relative;
    z-index: 1;
  }

  h2 {
    color: var(--primary-yellow);
  }
`;

const HeaderImageWrapperStyles = styled.figure`
  position: relative;
  margin: 0 auto;
  max-width: 250px;

  @media (min-width: 880px) {
    max-width: 350px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 1rem;
    left: 1rem;
    display: block;
    width: 100%;
    height: 100%;
    border: 5px solid var(--primary-green);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <HeaderImageWrapperStyles>
        <StaticImage
          src="../images/header-image.png"
          alt="Paulina Sedlak-Jakubowska"
          placeholder="blurred"
          loading="eager"
        />
      </HeaderImageWrapperStyles>
      <h1>
        Paulina
        <br />
        Sedlak-Jakubowska
      </h1>
      <h2>frontend developer</h2>
    </HeaderStyles>
  );
}
