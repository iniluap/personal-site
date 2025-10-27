import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNavStyles = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--white);
  width: 100%;
  max-width: 400px;
  height: 100%;
  z-index: 10;
  padding: 4rem;
  box-shadow: 0px 2px 12px 0px rgb(46 41 51 / 8%);
  transition: var(--transition);

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

const MobileNavTriggerStyle = styled.button`
  background-color: var(--primary-yellow);
  color: white;
  width: 5rem;
  height: 5rem;
  position: fixed;
  right: 0.5rem;
  top: var(--whitespace-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 2px 12px 0px rgb(46 41 51 / 8%),
    0px 4px 14px 0px rgb(46 41 51 / 8%);
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: var(--secondary-blue);
    color: white;
    outline: var(--primary-yellow) auto 2px;
  }

  &.close-trigger {
    z-index: 20;
  }

  &.open-trigger {
    z-index: 100;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLiStyled = styled.li`
  margin-bottom: 3rem;
`;

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const links = navRef.current?.querySelectorAll('.nav-link') || [];
    const handleLinkClick = () => {
      setIsOpen(false);
    };
    links.forEach((link) => link.addEventListener('click', handleLinkClick));
    return () => {
      links.forEach((link) =>
        link.removeEventListener('click', handleLinkClick),
      );
    };
  }, [isOpen]);

  return (
    <>
      <MobileNavStyles
        ref={navRef}
        // style={{ right: isOpen ? 0 : '-100%' }}
        style={{ display: isOpen ? 'block' : 'none' }}
        aria-hidden={!isOpen}
      >
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
              aria-label="Go to How I work"
            >
              How I work
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
              Community work
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
      {!isOpen && (
        <MobileNavTriggerStyle
          aria-label="Open menu"
          className="open-trigger"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} title="Menu open icon" />
        </MobileNavTriggerStyle>
      )}
      {isOpen && (
        <MobileNavTriggerStyle
          aria-label="Close menu"
          className="close-trigger"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} title="Menu close icon" />
        </MobileNavTriggerStyle>
      )}
    </>
  );
}
