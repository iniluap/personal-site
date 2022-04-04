import React from 'react';
import styled from 'styled-components';
import ResourceLinks from './ResourceLinks';

const CardStyles = styled.section`
  border: 2px solid var(--primary-yellow);
  box-shadow: 10px 10px 0px -3px var(--light-grey);
  padding: 1rem;

  h3 {
    margin-bottom: 1rem;
  }

  h4 {
    color: var(--secondary-blue);
    font-weight: 600;
  }

  .date {
    color: var(--dark-grey);
    font-size: 1rem;
  }
`;

export default function Card({
  title,
  subtitle,
  date,
  content,
  link1Url,
  link1AltText,
  link1,
  link2Url,
  link2AltText,
  link2,
}) {
  return (
    <CardStyles>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p className="date">{date}</p>
      <p>{content}</p>
      <ResourceLinks
        link1Url={link1Url}
        link1AltText={link1AltText}
        link1={link1}
        link2Url={link2Url}
        link2AltText={link2AltText}
        link2={link2}
      ></ResourceLinks>
    </CardStyles>
  );
}
