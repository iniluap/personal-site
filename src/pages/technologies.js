import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faJs,
  faGit,
  faGitlab,
  faGithub,
  faCss3,
  faSass,
  faAngular,
  faWordpress,
  faFigma,
  faJira,
  faConfluence,
  faGoogle,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBug,
  faBrush,
  faPenRuler,
  faSwatchbook,
  faTerminal,
  faFlaskVial,
  faArrowsSplitUpAndLeft,
  faFileCode,
  faCodeCommit,
  faCode,
  faFootballBall,
} from '@fortawesome/free-solid-svg-icons';

const TechnologiesStyles = styled.div`
  section {
    margin-bottom: 4rem;
  }
`;

export default function TechnologiesPage() {
  return (
    <TechnologiesStyles>
      <SectionHeader sectionTitle="Technologies" />
      <section>
        <h3>Development</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHtml5} />
            HTML
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3} />
            CSS
          </li>
          <li>
            <FontAwesomeIcon icon={faSass} />
            SASS
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} />
            JavaScript ES6
          </li>
          <li>
            <FontAwesomeIcon icon={faFileCode} /> TypeScript
          </li>
          <li>
            <FontAwesomeIcon icon={faAngular} />
            Angular
          </li>
          <li>
            <FontAwesomeIcon icon={faCodeCommit} /> RxJS
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} />
            NgRX
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} />
            Gatsby.js
          </li>
          <li>
            <FontAwesomeIcon icon={faFlaskVial} />
            Jasmine
          </li>
          <li>
            <FontAwesomeIcon icon={faWordpress} />
            WordPress
          </li>
          <li>
            <FontAwesomeIcon icon={faTerminal} /> Command line
          </li>
        </ul>
      </section>
      <section>
        <h3>Design</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faBrush} /> Visual design
          </li>
          <li>
            <FontAwesomeIcon icon={faSwatchbook} />
            Design systems
          </li>
          <li>
            <FontAwesomeIcon icon={faPenRuler} />
            Wireframing
          </li>
          <li>
            <FontAwesomeIcon icon={faFigma} />
            Figma
          </li>
        </ul>
      </section>
      <section>
        <h3>Product</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} />
            Agile
          </li>
          <li>
            <FontAwesomeIcon icon={faFootballBall} />
            Scrum
          </li>
          <li>
            <FontAwesomeIcon icon={faJira} />
            Jira
          </li>
          <li>
            <FontAwesomeIcon icon={faConfluence} />
            Confluence
          </li>
          <li>
            <FontAwesomeIcon icon={faGoogle} />
            GSuite
          </li>
        </ul>
      </section>
      <section>
        <h3>Processes</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGit} /> Git
          </li>
          <li>
            <FontAwesomeIcon icon={faGitlab} />
            GitLab
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </li>
          <li>
            <FontAwesomeIcon icon={faBug} /> Sentry
          </li>
        </ul>
      </section>
    </TechnologiesStyles>
  );
}
