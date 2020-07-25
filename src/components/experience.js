import React from 'react';

export default function Experience() {
  return (
    <article>
        <h2 className="psj-section-title">Experience</h2>
        <div className="psj-experience-wrapper">
            <div className="psj-experience-column">
                <h3>Postclick & Instapage</h3>
                <h4>frontend developer & scrum master</h4>
                <small>10.2018 - now</small>
                <p>
                    Here is some text about it that will explain it more.
                    And another sentence for more length.
                </p>
            </div>
            <div className="psj-experience-column">
                <h3>Freelance web developer</h3>
                <small>06.2018 - 10.2018</small>
                <p>
                    And some extra text that will go here.
                    For a bit different look.
                </p>
            </div>
            <div className="psj-experience-column">
                <h3>Sidnet</h3>
                <h4>frontend developer</h4>
                <small>10.2017 - 06.2018</small>
                <p>
                    The last text about it that will explain it more.
                    I will and some content soon.
                </p>
            </div>
        </div>
    </article>
  );
}
