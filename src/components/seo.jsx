import * as React from "react";
import SEO from "../seo.json";
import { Helmet } from 'react-helmet-async';

const Seo = () => {
  // If url is set to 'glitch-default', we use the hostname for the current page
  // Otherwise we use the value set in seo.json
  const url = SEO.url === 'glitch-default' ? window.location.hostname : SEO.url
  
  // React Helmet manages the content of the page head such as meta tags
  // We use the async package https://github.com/staylor/react-helmet-async
  return <Helmet>
    <title>Genisys</title>

    <meta
      name="description"
      content={SEO.description}
    />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={SEO.title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={url} />
    <meta
      property="og:description"
      content={SEO.description}
    />
    <meta
      property="og:image"
      content={SEO.image}
    />

    <meta name="twitter:card" content="summary" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1//css/all.min.css" />
  </Helmet>
};

export default Seo;
