import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const EducationStyles = styled.div`
  .card-wrapper {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    @media screen and (min-width: 768px) {
      section:first-child,
      section:nth-child(2) {
        grid-column: 1 / span 2;
      }
    }
  }
`;

export default function EducationPage() {
  return (
    <EducationStyles>
      <SectionHeader sectionTitle="My education" />

      <div className="card-wrapper">
        <Card
          title="Accessibility (self-study)"
          subtitle="Deque University"
          date="2024-2025"
          content={
            <>
              I completed Comprehensive Web and Digital Accessibility Training
              covering web, documents, PDF, mobile apps, and more. This training
              included preparation for the{' '}
              <abbr title="International Association of Accessibility Professionals">
                IAAP
              </abbr>{' '}
              exam. Some of the modules I've learned the most from are:
              <ul>
                <li>Designing an Accessible User Experience</li>
                <li>Device-Independent User Input Methods</li>
                <li>Conformance Testing, Detailed Methodology</li>
                <li>Usability Testing for Accessibility</li>
              </ul>
            </>
          }
        ></Card>

        <Card
          title="Programming (self-study)"
          subtitle="Online trainings &amp; on-site workshops "
          date="since 2016"
          content={
            <>
              I learned programming by taking on-line courses, tutorials and
              reading industry books. I also participated in commmunity
              workshops. The events I benefited from the most were:
              <ul>
                <li>WarsawJS - Workshop #50: Unit testing (2020)</li>
                <li>
                  WarsawJS - Workshop #37: Typescript for intermediate
                  developers (2019)
                </li>
                <li>
                  Frontend United - CSS and SVG in 2019 by Lea Verou and Chris
                  Lilley (2019)
                </li>
              </ul>
            </>
          }
        ></Card>

        <Card
          title="English Philology, B.A."
          subtitle="University of Silesia in Katowice"
          date="2015"
          content="Thesis in applied linguistics on socio-cultural images of femininity in newspaper discourse."
        ></Card>

        <Card
          title="Instrumental Studies"
          subtitle="Academy of Music in Łódź"
          date="2008-2012"
          content="Bachelor studies in cello performance, with focus on chamber and baroque music."
        ></Card>
      </div>
    </EducationStyles>
  );
}
