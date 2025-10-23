import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const HeaderStyles = styled.header`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 4rem;
    align-items: end;
    margin-bottom: 6rem;
  }

  .gatsby-image-wrapper {
    margin-top: 3rem;

    @media screen and (min-width: 768px) {
      margin-top: 0;
      height: min-content;
    }
  }
`;

const HeaderTitleWrapperStyles = styled.div`
  margin-top: 6rem;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

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

  @media (min-width: 768px) {
    margin: 0;
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
      <HeaderTitleWrapperStyles>
        <h1>
          Paulina
          <br />
          Sedlak-Jakubowska
        </h1>
        <h2>senior frontend engineer</h2>
        <h2>& accessibility advocate</h2>
      </HeaderTitleWrapperStyles>
    </HeaderStyles>
  );
}
