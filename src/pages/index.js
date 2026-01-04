import React from 'react';
import ExternalLink from '../components/ExternalLink';

export default function IndexPage() {
  return (
    <>
      <p>
        I'm Paulina, a Senior Frontend Engineer and accessibility specialist
        based in Warsaw. For the past 8 years, I've built interfaces used by
        millions of people daily, with a focus on making the web accessible to
        everyone.
      </p>
      <p className="m-top-4">
        In 2020, I&nbsp;started working on{' '}
        <ExternalLink href="https://www.instapage.com/" text="Instapage" />,
        an&nbsp;enterprise Angular application in the marketing tech field, as
        one of the two frontend engineers. Since 2022, I&nbsp;work as
        a&nbsp;software engineer at{' '}
        <ExternalLink href="https://about.gitlab.com/" text="GitLab" />, where
        I&nbsp;contribute to the Source Code Management group and lead the
        Product Accessibility Working group.
      </p>
      <p className="m-top-4">
        My work spans the full development lifecycle - from early ideation and
        design collaboration to implementation, testing, and measuring impact in
        production. I specialize in Vue.js, digital accessibility, and working
        with complex legacy codebases. I'm passionate about well-written and
        well-organised code, inclusive design, and ensuring that every feature I
        build works seamlessly with assistive technologies.
      </p>
      <p className="m-top-4">
        <strong>
          I'm expanding my practice to examine the social implications of AI
          systems and digital products.
        </strong>{' '}
      </p>
      <p className="m-top-4">
        As someone who's implemented features at scale, I've become increasingly
        interested in the language used to market and explain AI - how these
        linguistic choices shape public perception, encode power dynamics, and
        obscure technical realities. As someone who could build these systems,
        I'm choosing to critically analyze them instead.
      </p>
      <p className="m-top-4">
        I'm particularly focused on AI discourse: the anthropomorphization in
        chatbot interfaces, the promises made by AI companion marketing, and how
        narratives about AI "taking over" jobs and the world can overshadow
        present-day social issues - like impacts on mental health, labor
        practices, and community connection - that we could actually address and
        mitigate now.
      </p>
      <p className="m-top-4">
        I'm currently pursuing coursework in sociolinguistics and sociology at
        the University of Warsaw, preparing for{' '}
        <abbr title="International Association of Accessibility Professionals">
          IAAP
        </abbr>{' '}
        certification, and conducting independent research on digital discourse
        that I'll be publishing on this site.
      </p>
      <p className="m-top-4">
        Before tech, I studied English philology with a focus on
        sociolinguistics and taught ESL. I've always been interested in how
        language shapes power and perception - now I'm applying that lens to the
        systems I know best.
      </p>
      <p className="m-top-4">
        I believe engineers need critical literacy about the social weight of
        their technical decisions. The interfaces we build aren't neutral.
        They're linguistic and social systems that shape how millions of people
        understand themselves and their world.
      </p>
    </>
  );
}
