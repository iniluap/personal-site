import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main className="psj-404-wrapper">
      <Helmet
        title="P. Sędłak-Jakubowska | frontend developer" />
      <div className="psj-404">
        <h1>Page not found</h1>
        <a href="/">Go to homepage</a>
      </div>
      <Footer />
    </main>
  );
}
