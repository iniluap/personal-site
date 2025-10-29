import React from 'react';
import ExternalLink from '../components/ExternalLink';

export default function IndexPage() {
  return (
    <>
      <p>
        Hi! My name is Paulina. I&nbsp;am a&nbsp;self-taught frontend engineer.
        Since 2017, I&nbsp;have been involved in various projects creating
        landing-pages, websites and web applications. In 2020, I&nbsp;started
        working on{' '}
        <ExternalLink href="https://www.instapage.com/" text="Instapage" />,
        an&nbsp;enterprise Angular application in marketing tech field, as one
        of the two frontend engineers. Since 2022, I&nbsp;work as
        a&nbsp;software engineer at{' '}
        <ExternalLink href="https://about.gitlab.com/" text="GitLab" />, where
        I&nbsp;contribute to the Source Code Management group and lead the
        Product Accessibility Working group. I&nbsp;do not shy away from
        learning new frameworks or content management systems. I&nbsp;also help
        out with backend related topics and QA processes.
      </p>
      <p className="m-top-4">
        I've been a&nbsp;volunteer at a&nbsp;non-profit, where I&nbsp;organized
        youth camps, workshops, and trainings, leading educational exercises on
        human rights, diversity, sustainable development, and peaceful conflict
        resolution. I've also co‑organized{' '}
        <ExternalLink href="https://www.pylight.org/" text="PyLight Waw" />,
        a&nbsp;beginner‑friendly Python meetup and{' '}
        <ExternalLink
          href="https://djangogirls.org/en/warszawa/"
          text="Django Girls Warsaw"
        />
        , a&nbsp;free programming workshops for women.
      </p>
      <p className="m-top-4">
        I'm passionate about interior design and minimalism. On my perfect day
        off I&nbsp;would sit on the balcony, with a&nbsp;book in hand and my dog
        nearby.
      </p>
    </>
  );
}
