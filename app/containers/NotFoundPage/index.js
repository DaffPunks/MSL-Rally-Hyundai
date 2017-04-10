/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import IMG from './nofound.jpg';

export default function NotFound() {
  return (
    <article>
      <div>
        <img src={IMG} />
      </div>
    </article>
  );
}
