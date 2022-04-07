import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const ProjectsStyles = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

  @media screen and (min-width: 768px) {
    section:first-child {
      grid-column: 1 / span 2;
    }
  }
`;

export default function ProjectsPage() {
  return (
    <>
      <SectionHeader sectionTitle="Projects" />
      <ProjectsStyles className="card-wrapper">
        <Card
          title="WCAG 2.0 compliance"
          subtitle="Enterprise landing-page building platform"
          date="2020 - 2021, Warsaw, Poland"
          content="
            I conducted an internal audit of a landing page building platform against WCAG 2.0 compliance.
            I created a compliance roadmap with a list of recommendations and technical specification.
            As a member of the development team I implemented new features and accessibility adjustments.
            Finally, I created an in-house video tutorial on how to use our platform to create accessible landing pages.
          "
        ></Card>

        <Card
          title="Enterprise blog"
          subtitle="Marketing blog"
          date="2020, Warsaw, Poland"
          content="
            I set up the blog with the Gutenberg editor on a WordPress website.
            I integrated the CMS editor with the company UI library to allow using predefined styles.
            On the frontend I created modular components with subtle interactions for images &amp; text hovers,
            and reading lenght counter.
          "
        ></Card>

        <Card
          title="Enterprise WordPress website"
          subtitle="Marketing website"
          date="2020, Warsaw, Poland"
          content="
            As a sole frontend developer, I developed a highly responsive website.
            I implemented a design based on 8-point grid, subtle user interactions,
            and font smooth-scaling based on viewport width.
          "
        ></Card>
      </ProjectsStyles>
    </>
  );
}
