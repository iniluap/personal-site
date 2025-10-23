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
  faVuejs,
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

const TechnologiesSectionStyles = styled.section`
  margin-top: 6rem;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: start;
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
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  list-style: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    margin-top: 0.5rem;
  }
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

const TechnologiesTermStyled = styled.strong`
  color: var(--secondary-rose);
`;

export default function TechnologiesPage() {
  return (
    <div>
      <SectionHeader sectionTitle="Technologies" />
      <p>
        In my current role, I&nbsp;work with a&nbsp;modern full-stack technology
        ecosystem centered around{' '}
        <TechnologiesTermStyled>Vue.js</TechnologiesTermStyled> for building
        interactive user interfaces. I&nbsp;utilize{' '}
        <TechnologiesTermStyled>GraphQL</TechnologiesTermStyled> for efficient
        API data querying and manipulation, while styling is handled through
        a&nbsp;combination of{' '}
        <TechnologiesTermStyled>Sass</TechnologiesTermStyled> for advanced CSS
        preprocessing and{' '}
        <TechnologiesTermStyled>Tailwind</TechnologiesTermStyled> for
        utility-first styling. The&nbsp;application views are templated using{' '}
        <TechnologiesTermStyled>HAML</TechnologiesTermStyled> for clean,
        readable markup.
      </p>
      <p>
        On the testing front, I&nbsp;ensure quality through comprehensive test
        coverage using <TechnologiesTermStyled>Capybara</TechnologiesTermStyled>{' '}
        for Ruby-based integration and end-to-end testing,{' '}
        <TechnologiesTermStyled>Jest</TechnologiesTermStyled> for frontend unit
        testing, and <TechnologiesTermStyled>axe-core</TechnologiesTermStyled>{' '}
        for automated accessibility compliance testing. Additionally,
        I&nbsp;leverage{' '}
        <TechnologiesTermStyled>Storybook</TechnologiesTermStyled> to develop,
        document, and test UI components in isolation, facilitating
        a&nbsp;component-driven development workflow and improving collaboration
        across the team.
      </p>
      <TechnologiesSectionStyles>
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
            <FontAwesomeIcon icon={faVuejs} />
            Vue.js
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
      </TechnologiesSectionStyles>
      <TechnologiesSectionStyles>
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
      </TechnologiesSectionStyles>
      <TechnologiesSectionStyles>
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
      </TechnologiesSectionStyles>
      <TechnologiesSectionStyles>
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
      </TechnologiesSectionStyles>
    </div>
  );
}
