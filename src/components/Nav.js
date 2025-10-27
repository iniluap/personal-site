import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  display: none;
  padding: var(--whitespace-secondary) 0;

  @media screen and (min-width: 768px) {
    display: block;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--whitespace-secondary);
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul className="ul-plain">
        <li>
          <Link to="/" className="nav-link" aria-label="Go to Home page">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/technologies"
            className="nav-link"
            aria-label="Go to How I work"
          >
            How I work
          </Link>
        </li>
        <li>
          <Link
            to="/education"
            className="nav-link"
            aria-label="Go to My Education"
          >
            My Education
          </Link>
        </li>
        <li>
          <Link
            to="/community"
            className="nav-link"
            aria-label="Go to Writing samples page"
          >
            Community work
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="nav-link"
            aria-label="Go to Projects page"
          >
            Projects
          </Link>
        </li>
      </ul>
    </NavStyles>
  );
}
