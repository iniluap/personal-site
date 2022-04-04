import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNavStyles = styled.nav`
  position: fixed;
  top: 0;
  right: -100%;
  background-color: var(--white);
  width: 90vw;
  max-width: 400px;
  height: 100%;
  z-index: 10;
  padding: 4rem;
  box-shadow: 0px 2px 12px 0px rgb(46 41 51 / 8%);
  transition: all 0.3s ease-in-out;

  &:target {
    right: 0;

    ~ .open-trigger {
      display: none;
    }

    ~ .close-trigger {
      display: block;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavTriggerStyle = styled.a`
  width: auto;
  height: auto;
  padding: var(--whitespace-primary);
  border: none;
  position: fixed;
  right: 0;
  top: var(--whitespace-primary);
  background: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.close-trigger {
    display: none;
    z-index: 20;
  }

  &.open-trigger {
    background-color: var(--white);
    box-shadow: 4px 4px 0px 0px var(--light-grey);
    border: 2px solid var(--light-grey);
    border-right: none;
    z-index: 100;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLiStyled = styled.li`
  margin-bottom: 1rem;
`;

export default function MobileNav() {
  return (
    <>
      <MobileNavStyles id="mobileNav">
        <ul className="ul-plain">
          <MobileNavLiStyled>
            <Link to="/" className="nav-link" aria-label="Go to Home page">
              Home
            </Link>
          </MobileNavLiStyled>
          <MobileNavLiStyled>
            <Link
              to="/technologies"
              className="nav-link"
              aria-label="Go to Technologies I use"
            >
              Technologies I use
            </Link>
          </MobileNavLiStyled>
          <MobileNavLiStyled>
            <Link
              to="/experience"
              className="nav-link"
              aria-label="Go to My experience"
            >
              My experience
            </Link>
          </MobileNavLiStyled>
          <MobileNavLiStyled>
            <Link
              to="/education"
              className="nav-link"
              aria-label="Go to My Education"
            >
              My Education
            </Link>
          </MobileNavLiStyled>
          <MobileNavLiStyled>
            <Link
              to="/community"
              className="nav-link"
              aria-label="Go to Writing samples page"
            >
              Community activities
            </Link>
          </MobileNavLiStyled>
          <MobileNavLiStyled>
            <Link
              to="/projects"
              className="nav-link"
              aria-label="Go to Projects page"
            >
              Projects
            </Link>
          </MobileNavLiStyled>
        </ul>
      </MobileNavStyles>
      <MobileNavTriggerStyle
        href="#mobileNav"
        aria-label="Open menu"
        className="open-trigger"
      >
        <FontAwesomeIcon icon={faBars} title="Menu open icon" />
      </MobileNavTriggerStyle>
      <MobileNavTriggerStyle
        href="#"
        aria-label="Close menu"
        className="close-trigger"
      >
        <FontAwesomeIcon icon={faXmark} title="Menu close icon" />
      </MobileNavTriggerStyle>
    </>
  );
}
