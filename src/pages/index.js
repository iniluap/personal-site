import React from 'react';
import Header from '../components/header';
import About from '../components/about';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Experience />
      <a target="_blank" rel="noreferrer" className="psj-button psj-button-cta" href="https://github.com/iniluap/personal-site">
        See this project on GitHub
      </a>
      <Footer />
    </main>
  );
}
