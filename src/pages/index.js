import React, { Component } from 'react';
import Header from '../components/header';
import About from '../components/about';
import Skills from '../components/skills';
import Experience from '../components/experience';
import Footer from '../components/footer';

export default class Home extends Component {
  constructor() {
    super();

    this.options = {
      root: document.querySelector('#js-observer-root'),
      rootMargin: '0px',
      threshold: 0.2
    };
    this.observerTargets = document.querySelectorAll('.js-intersecting-element');
    this.observer = new IntersectionObserver(this.handleIntersecting, this.options);
  }

  handleIntersecting(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        }
    });
  }

  componentDidMount() {
    this.observerTargets.forEach(
      (target) => this.observer.observe(target)
    );
  };

  render() {
    return (
      <main id="js-observer-root">
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
}
