import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const SocialLinksStyles = styled.a`
  font-size: 2rem;

  &:hover {
    .fa-linkedin-in {
      color: #0072b1;
    }

    .fa-github {
      color: #171515;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;

export default function IndexPage() {
  return (
    <>
      <p>
        Hi! My name is Paulina. I live in Warsaw, Poland, and this page is a
        cross between a business card and a portfolio.
      </p>
      <p>
        I am a self-taught frontend developer. Since 2017, I have been involved
        in various projects including landing-pages, websites and web
        applications. For the last 1,5 year I have been working on an enterprise
        Angular application, as one of the two frontend engineers. I do not shy
        away from learning new frameworks or content management systems. I also
        help out with backend related topics and QA processes.
      </p>
      <p>
        In the meantime, I've volunteered at a non-profit, where I organized
        youth camps and weekend workshops, leading educational exercises on
        human rights, diversity, sustainable development, and peaceful conflict
        resolution. I've also co‑organized{' '}
        <a href="https://www.pylight.org/" target="_blank" rel="noreferrer">
          PyLight Waw
        </a>
        , a beginner‑friendly Python meetup and{' '}
        <a
          href="https://djangogirls.org/en/warszawa/"
          target="_blank"
          rel="noreferrer"
        >
          Django Girls Warsaw
        </a>
        , a free programming workshops for women.
      </p>
      <ul className="m-top-3 ul-plain ul-links">
        <li>
          <SocialLinksStyles
            href="https://www.linkedin.com/in/psjakubowska/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              title="LinkedIn accout of Paulina Sędłak-Jakubowska"
            />
          </SocialLinksStyles>
        </li>
        <li>
          <SocialLinksStyles
            href="https://github.com/iniluap"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              title="GitHub accout of Paulina Sędłak-Jakubowska"
            />
          </SocialLinksStyles>
        </li>
      </ul>
    </>
  );
}
