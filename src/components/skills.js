import React from 'react';

export default function Skills() {
  return (
    <article>
        <h2 className="psj-section-title">Skills</h2>
        <div className="psj-skills-wrapper">
            <div className="psj-skills-column">
                <h3>HTML & CSS</h3>
                <small>expert</small>
                <p>
                    Here is some text about it that will explain it more.
                    And another sentence for more length.
                </p>
            </div>
            <div className="psj-skills-column">
                <h3>JavaScript</h3>
                <small>confident</small>
                <p>
                    And some extra text that will go here.
                    For a bit different look.
                </p>
            </div>
            <div className="psj-skills-column">
                <h3>PHP & WordPress</h3>
                <small>confident</small>
                <p>
                    The last text about it that will explain it more.
                    I will and some content soon.
                </p>
            </div>
        </div>
    </article>
  );
}
