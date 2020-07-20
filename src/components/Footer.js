import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://hnatiuk.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          main page
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/hnatiukr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.facebook.com/hnatiukr"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a>{' '}
        &bull;{' '}
        <a
          href="https://twitter.com/hnatiukr"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/mort-gh"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
      </footer>
    );
  }
}

export default Footer;
