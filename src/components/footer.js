import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  grid-area: footer;
  text-align: center;
  color: var(--dark-grey);
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; Paulina Sędłak-Jakubowska {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
