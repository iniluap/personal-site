import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';

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
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript ES6</li>
          <li>TypeScript</li>
          <li>Angular</li>
          <li>RxJS</li>
          <li>NgRX</li>
          <li>Nx</li>
          <li>Gatsby.js</li>
          <li>Jasmine</li>
          <li>WordPress</li>
        </ul>
      </section>
      <section>
        <h3>Design</h3>
        <ul>
          <li>Visual design</li>
          <li>Design systems</li>
          <li>Wireframing</li>
          <li>Figma</li>
          <li>Zeplin</li>
        </ul>
      </section>
      <section>
        <h3>Product</h3>
        <ul>
          <li>Agile</li>
          <li>Scrum</li>
          <li>Jira</li>
          <li>GSuite</li>
        </ul>
      </section>
      <section>
        <h3>Processes</h3>
        <ul>
          <li>Git</li>
          <li>GitLab</li>
          <li>GitHub</li>
          <li>Sentry</li>
        </ul>
      </section>
    </TechnologiesStyles>
  );
}
