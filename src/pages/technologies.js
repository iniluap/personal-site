import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faJs,
  faGit,
  faGitlab,
  faCss3,
  faSass,
  faFigma,
  faJira,
  faConfluence,
  faGoogle,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBug,
  faSwatchbook,
  faTerminal,
  faGem,
  faArrowsSplitUpAndLeft,
  faFlaskVial,
  faFootballBall,
  faC,
  faUniversalAccess,
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
  font-size: 2rem;
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
    grid-area: 2 / 2;
  }
`;

const TechnologyItemStyled = styled.li`
  padding: 0.5rem 1.5rem;
  background-color: var(--primary-green);
  box-shadow: var(--layered-shadow-small);
  border-radius: 2rem;
  color: var(--white);

  svg {
    margin-right: 1rem;
    color: var(--light-grey);
  }
`;

export default function TechnologiesPage() {
  return (
    <div>
      <SectionHeader sectionTitle="How I work" />

      <TechnologiesSectionStyles>
        <TechnologiesLabel>Ideation & Discovery</TechnologiesLabel>
        <p>
          I believe great features start with understanding the problem deeply.
          When exploring new ideas, I collaborate early with stakeholders. As an
          accessibility expert, I ensure inclusive design is part of the
          conversation, not an afterthought. I research technical feasibility. I
          investigate how new functionality fits into the current ecosystem. I
          specialize in analysing legacy codebase and breaking down steps to
          work with tech debt.
        </p>
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
        <TechnologiesLabel>Design Handover</TechnologiesLabel>
        <p>
          The transition from design to development is critical. My approach
          includes active participation in design reviews. I provide technical
          input on feasibility, accessibility considerations, and implementation
          complexity. I review designs against WCAG guidelines, identifying
          potential issues before code is written. I work with designers to
          document component behavior, error states, and responsive breakpoints,
          clarifying interactions and edge cases. I ensure designs leverage
          existing components and design system or justify new patterns.
        </p>
        <TechnologiesListStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faSwatchbook} />
            Design systems
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faFigma} />
            Figma
          </TechnologyItemStyled>
          <TechnologyItemStyled>Storybook</TechnologyItemStyled>
        </TechnologiesListStyled>
      </TechnologiesSectionStyles>

      <TechnologiesSectionStyles>
        <TechnologiesLabel>Implementation</TechnologiesLabel>
        <p>
          My development process emphasizes quality, maintainability, and
          collaboration. I write clean, semantic code following agreed
          standards. Every component I build meets WCAG standards, with proper
          ARIA roles and attributes, and keyboard navigation. I document complex
          logic, architectural decisions, and usage patterns for future
          maintainers.
        </p>
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
          <TechnologyItemStyled>GraphQL</TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faTerminal} />
            Command line
          </TechnologyItemStyled>
        </TechnologiesListStyled>
      </TechnologiesSectionStyles>

      <TechnologiesSectionStyles>
        <TechnologiesLabel>Testing & Quality&nbsp;Assurance</TechnologiesLabel>
        <p>
          Quality is non-negotiable. My testing approach includes ensuring
          functionality works across modern browsers and respects feature
          parity, user preferences and permissions. I test with unusual data and
          error scenarios to validate complete workflows. I write comprehensive
          tests including unit tests, integration tests, and axe-core
          accessibility checks. I make sure tests are up to date and prevent
          reintroduction of fixed bugs. I manually test my work to ensure
          excellent user experience with or without assistive technologies.
        </p>
        <TechnologiesListStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faFlaskVial} />
            Jest
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faC} />
            Cypress
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faGem} />
            Capybara
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faUniversalAccess} />
            axe-core
          </TechnologyItemStyled>
        </TechnologiesListStyled>
      </TechnologiesSectionStyles>

      <TechnologiesSectionStyles>
        <TechnologiesLabel>Code Review</TechnologiesLabel>
        <p>
          Code review is where knowledge sharing and quality converge. I review
          for correctness, performance, accessibility, maintainability, and
          adherence to standards. I catch accessibility issues early, educating
          teammates on best practices. I explain the "why" behind suggestions,
          helping others grow. I see reviews of my code as learning
          opportunities. I prioritize keeping team velocity high by reviewing
          other people's work promptly.
        </p>
        <TechnologiesListStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faGit} />
            Git
          </TechnologyItemStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faGitlab} />
            GitLab
          </TechnologyItemStyled>
        </TechnologiesListStyled>
      </TechnologiesSectionStyles>

      <TechnologiesSectionStyles>
        <TechnologiesLabel>Measuring Impact</TechnologiesLabel>
        <p>
          Work doesn’t stop when code is accepted. I verify my features in the
          production environment and monitor their impact on the product. I use
          Sentry to identify issues directly impacting clients and Sitespeed
          with axe plugin to make sure new features perform well over time.
        </p>
        <TechnologiesListStyled>
          <TechnologyItemStyled>
            <FontAwesomeIcon icon={faBug} />
            Sentry
          </TechnologyItemStyled>
          <TechnologyItemStyled>Sitespeed.io</TechnologyItemStyled>
        </TechnologiesListStyled>
      </TechnologiesSectionStyles>

      <TechnologiesSectionStyles>
        <TechnologiesLabel>Collaboration & Mentorship</TechnologiesLabel>
        <p>
          Engineering is a team sport, and leadership means uplifting others. I
          work closely with backend engineers on API design, with designers on
          implementation fidelity, and with product managers on scope and
          priorities. I coordinate efforts across teams to integrate automated
          accessibility checks, compile violation lists, and develop remediation
          plans. By mentoring junior and intermediate engineers, I provide
          guidance on technical challenges, career growth, and engineering
          practices.
        </p>
      </TechnologiesSectionStyles>
    </div>
  );
}
