import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const CommunityStyles = styled.div`
  .card-wrapper {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

export default function CommunityPage() {
  return (
    <CommunityStyles>
      <SectionHeader sectionTitle="Community work" />
      <div className="card-wrapper">
        <Card
          title="PyLight Waw"
          subtitle="Organiser"
          date="2017 - 2020, Warsaw, Poland"
          content="I organised a monthly meetup for beginners in Python. I was one of
              the people who updated and tweaked the website, ran social media
              accounts, and managed events on-site."
          link1Url="http://www.pylight.org/"
          link1AltText="Redirect in new tab to this website"
          link1="Website"
          link2Url="https://www.facebook.com/pylightmeetup"
          link2AltText="Redirect in new tab to this Facebook page"
          link2="Facebook"
        ></Card>

        <Card
          title="PyLight Waw #8"
          subtitle="Speaker"
          date="Sep 2018, Warsaw, Poland"
          content="I delivered a presentation on the basic concepts of Scrum."
          link1Url="https://www.youtube.com/watch?v=N34jrb-IL2E"
          link1AltText="Redirect in new tab to this video"
          link1="YouTube"
          link2Url="https://slides.com/iniluap/scrum"
          link2AltText="Redirect in new tab to this presentation file"
          link2="Slides"
        ></Card>

        <Card
          title="DjangoGirls Warsaw"
          subtitle="Organiser"
          date="Dec 2016 - Feb 2019, Warsaw, Poland"
          content="I co-organised two editions of a programming workshop for a group of 45 women. I managed the event website, trained mentors, and designed printed and online graphic materials."
          link1Url="https://djangogirls.org/en/warszawa/"
          link1AltText="Redirect in new tab to this website"
          link1="Website"
          link2Url="https://www.facebook.com/DjangoGirlsWarsaw"
          link2AltText="Redirect in new tab to this Facebook page"
          link2="Facebook"
        ></Card>

        <Card
          title="CISV International"
          subtitle="Training Coordinator &amp; Youth Leader"
          date="Jun 2014 - Present, EMEA &amp; Poland"
          content="I designed and conducted trainings on peace education, sustainable development and conflict resolution on both local and international level, for children, young adults and adult volounteers."
          link1Url="https://pl.cisv.org/"
          link1AltText="Redirect in new tab to CISV Poland website"
          link1="CISV Poland"
          link2Url="https://cisv.org/"
          link2AltText="Redirect in new tab to CISV International website"
          link2="CISV International"
        ></Card>
      </div>
    </CommunityStyles>
  );
}
