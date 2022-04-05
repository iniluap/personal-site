import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// styles
const CodeStyles = styled.code`
  color: var(--secondary-blue);
  padding: 0.5rem;
  background-color: var(--light-grey);
  font-size: 1.25rem;
  border-radius: 4rem;
`;

// markup
const NotFoundPage = () => {
  return (
    <>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <CodeStyles>src/pages/</CodeStyles>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </>
  );
};

export default NotFoundPage;
