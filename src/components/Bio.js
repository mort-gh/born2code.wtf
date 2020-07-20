import React from 'react';
import profilePic from '../assets/fb-avatar.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Roma Hnatiuk`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          My name is{' '}
          <a
            href="https://www.facebook.com/hnatiukr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roma Hnatiuk
          </a>{' '}
          <br />
          Blog about the code I once wrote.
        </p>
      </div>
    );
  }
}

export default Bio;
