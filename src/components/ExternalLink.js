import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ExternalLinkStyles = styled.a`
  svg {
    height: 1rem;
    vertical-align: baseline;
  }
`;

export default function ExternalLink({ href, text }) {
  return (
    <ExternalLinkStyles href={href} target="_blank" rel="noreferrer">
      {text}
      <span className="sr-only">- opens in new tab</span>
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </ExternalLinkStyles>
  );
}
