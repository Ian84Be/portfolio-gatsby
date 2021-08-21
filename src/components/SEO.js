import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, title, description, image }) {
  return (
    <Helmet titleTemplate={`%s`}>
      <html lang="en" />
      <title>{title}</title>

      {/* favicons */}
      <link rel="alternate icon" href="/favicon.ico" />

      {/* standard meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />

      {/* Open Graph metadata */}
      {location && <meta property="og:url" content={location.href} />}
      <meta
        property="og:image"
        content={image || '/Ian_Portrait_circle_150.png'}
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={title} key="ogsitename" />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />

      {/* this is an escape hatch, in case you need to pass children to override some of these tags */}
      {children}
    </Helmet>
  );
}
