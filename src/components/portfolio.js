import React from 'react';

export default function Portfolio() {
  return (
    <article>
        <h2 className="psj-section-title">Portfolio</h2>
        <div className="psj-portfolio-wrapper">
            <div className="psj-portfolio-tile">
                <h3>HTML & CSS</h3>
                <small>expert</small>
                <p>
                    Here is some text about it that will explain it more.
                    And another sentence for more length.
                </p>
                <a className="psj-button" href="#">See on GitHub</a>
            </div>
            <div className="psj-portfolio-tile">
                <h3>JavaScript</h3>
                <small>confident</small>
                <p>
                    And some extra text that will go here.
                    For a bit different look.
                </p>
                <a className="psj-button" href="#">See on GitHub</a>
            </div>
            <div className="psj-portfolio-tile">
                <h3>PHP & WordPress</h3>
                <small>confident</small>
                <p>
                    The last text about it that will explain it more.
                    I will and some content soon.
                </p>
                <a className="psj-button" href="#">See on GitHub</a>
            </div>
        </div>
    </article>
  );
}
