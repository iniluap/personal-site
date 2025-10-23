import React from 'react';
import Layout from './src/components/Layout';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

// Collect styled-components styles during SSR to avoid FOUC in production
export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet();
  try {
    const bodyHTML = renderToString(sheet.collectStyles(bodyComponent));
    replaceBodyHTMLString(bodyHTML);
    const preloadFonts = [
      '/static/open-sans-latin-400-normal-a2d02404d087c7c068d4266172a0933d.woff2',
      '/static/shadows-into-light-latin-400-normal-720e9b3fbe2aea1eece8f38f9a47ef93.woff2',
    ].map((href) =>
      React.createElement('link', {
        key: href,
        rel: 'preload',
        href,
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      }),
    );

    setHeadComponents([sheet.getStyleElement(), ...preloadFonts]);
  } catch (error) {
    // Re-throw after cleanup
    throw error;
  } finally {
    sheet.seal();
  }
};
