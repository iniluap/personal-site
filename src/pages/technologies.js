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
    margin-bottom: 6rem;
  }
`;

const TechnologiesLabel = styled.h3`
  border: solid 2px var(--secondary-rose);
  display: inline-block;
  min-width: 220px;
  position: relative;
  left: -6rem;
  padding: 1rem 3rem 1rem 6rem;
  text-align: right;
  clip-path: polygon(10% 0%, 98% 0%, 90% 100%, 2% 100%);
`;

const TechnologiesListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  list-style: none;
`;

const TechnologyItemStyled = styled.li`
  padding: 0.5rem 1.5rem;
  background-color: var(--primary-green);
  border-radius: 2rem;
  color: var(--white);

  svg {
    margin-right: 1rem;
    color: var(--light-grey);
  }
`;

export default function TechnologiesPage() {
  return (
    <TechnologiesStyles>
      <SectionHeader sectionTitle="Technologies" />
      <section>
        <TechnologiesLabel>Development</TechnologiesLabel>
        <TechnologiesListStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faHtml5} />
            HTML
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faCss3} />
            CSS
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faSass} />
            SASS
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faJs} />
            JavaScript ES6
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faFileCode} />
            TypeScript
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faAngular} />
            Angular
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faCodeCommit} />
            RxJS
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faCode} />
            NgRX
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faReact} />
            Gatsby.js
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faFlaskVial} />
            Jasmine
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faWordpress} />
            WordPress
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faTerminal} />
            Command line
          </TechnologyItemStyled>
        </TechnologiesListStyled>
      </section>
      <section>
        <TechnologiesLabel>Design</TechnologiesLabel>
        <TechnologiesListStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faBrush} />
            Visual design
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faSwatchbook} />
            Design systems
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faPenRuler} />
            Wireframing
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faFigma} />
            Figma
          </TechnologyItemStyled>
        </TechnologiesListStyled>
      </section>
      <section>
        <TechnologiesLabel>Product</TechnologiesLabel>
        <TechnologiesListStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} />
            Agile
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faFootballBall} />
            Scrum
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faJira} />
            Jira
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faConfluence} />
            Confluence
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faGoogle} />
            GSuite
          </TechnologyItemStyled>
        </TechnologiesListStyled>
      </section>
      <section>
        <TechnologiesLabel>Processes</TechnologiesLabel>
        <TechnologiesListStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faGit} />
            Git
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faGitlab} />
            GitLab
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faBug} />
            Sentry
          </TechnologyItemStyled>
        </TechnologiesListStyled>
      </section>
    </TechnologiesStyles>
  );
}
