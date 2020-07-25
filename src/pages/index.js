import React from 'react';
import Header from '../components/header';
import About from '../components/about';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';
import Experience from '../components/experience';
import Community from '../components/community';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Community />
      <Footer />
    </main>
  );
}
