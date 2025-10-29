import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  grid-area: footer;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--whitespace-primary);
  text-align: center;
  color: var(--dark-grey);
`;

const SocialLinksStyles = styled.a`
  font-size: 2rem;

  .fa-linkedin-in,
  .fa-github {
    transition: var(--transition);
    color: var(--secondary-blue);
  }

  &:hover {
    .fa-linkedin-in,
    .fa-github {
      color: var(--primary-yellow);
    }
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <ul className="m-top-3 ul-plain ul-links">
        <li>
          <SocialLinksStyles
            aria-label="Visit my linkedIn profile"
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
            aria-label="Visit my GitHub profile"
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
      <p>&copy; Paulina Sędłak-Jakubowska {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
