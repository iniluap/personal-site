import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import MobileNav from './MobileNav';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const MainStyles = styled.main`
  background: var(--white);
  display: grid;
  grid-template-rows: auto min-content 1fr min-content;
  grid-template-areas:
    'header'
    'nav'
    'content'
    'footer';
  gap: var(--whitespace-primary);
  align-items: start;
`;

const ArticleStyles = styled.article`
  grid-area: content;
`;

export default function Layout({ children }) {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <meta charSet="utf-8" />
        <title>Paulina Sędłak-Jakubowska</title>
        <meta
          name="description"
          content="Personal site of Paulina Sędłak-Jakubowska - frontend developer."
        />
        <link rel="canonical" href="http://paulina.s-j.me" />
      </Helmet>
      <GlobalStyles />
      <Typography />
      <a href="#main-content" className="sr-only">
        Skip to content
      </a>
      <MobileNav />
      <MainStyles>
        <Header />
        <Nav className="nav" />
        <ArticleStyles id="main-content">{children}</ArticleStyles>
        <Footer />
      </MainStyles>
    </>
  );
}
