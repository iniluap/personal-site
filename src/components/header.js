import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const HeaderStyles = styled.header`
  background-color: var(--white);
  box-shadow: var(--layered-shadow);

  @media screen and (min-width: 768px) {
    background-color: var(--primary-green);
    padding: var(--whitespace-primary);
    display: flex;
    gap: 4rem;
    align-items: end;
  }

  .gatsby-image-wrapper {
    @media screen and (min-width: 768px) {
      height: min-content;
    }
  }
`;

const HeaderTitleWrapperStyles = styled.div`
  background-color: var(--white);
  padding: var(--whitespace-primary);

  @media screen and (min-width: 768px) {
    margin-top: 0;
    position: relative;
    left: -6rem;
    top: 0;
    flex: 1;
    align-self: center;
  }

  h1 {
    font-size: clamp(3rem, 6vw, 4rem);
    margin: 0.5rem 0;
  }

  h2 {
    color: var(--primary-yellow);
  }
`;

const HeaderImageWrapperStyles = styled.figure`
  margin-bottom: 0;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 0;
    max-width: 350px;
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
        <h2>& accessibility expert</h2>
      </HeaderTitleWrapperStyles>
    </HeaderStyles>
  );
}
