import React from 'react';
import Head from 'next/head';
import truncate from '@libs/truncate';
import icon144 from '../../../public/icons/icon-144x144.png';
import icon192 from '../../../public/icons/icon-192x192.png';
import icon256 from '../../../public/icons/icon-256x256.png';
import icon384 from '../../../public/icons/icon-384x384.png';
import icon48 from '../../../public/icons/icon-48x48.png';
import icon512 from '../../../public/icons/icon-512x512.png';
import icon72 from '../../../public/icons/icon-72x72.png';
import icon96 from '../../../public/icons/icon-96x96.png';

export type MetadataProps = {
  title: string;
  /**
   * 500 char description.
   *
   * @default 'A modern view of US Congress.'
   */
  description500?: string;
  /**
   * 200 char description.
   *
   * @default truncates description500 and appends ellipsis.
   */
  description200?: string;
  /**
   * 100 char description.
   *
   * @default truncates description500 and appends ellipsis.
   */
  description100?: string;
  /**
   * Path to current page. Will be appended to BASE_URL. Should start with '/'.
   *
   * @example '/about' - if we are on `congress.wiki/about`
   */
  path: string;
  /**
   * Array of keywords about the page. As of 2021 this is becoming less used
   * by search engines so dont worry too much about it. Just nice to have in
   * case it becomes relevant. Plus we can easily auto-populate this with
   * data like legislation subjects.
   *
   * @default none
   */
  keywords?: string[];
  /**
   * The type of your object, e.g., "video.movie". Depending on the type you
   * specify, other properties may also be required.
   *
   * @default 'article'
   */
  type?: 'product' | 'blog' | 'website' | 'book' | 'movie' | 'article' | string;
  /**
   * @default 'Ryan Parker'
   */
  author?: string;
  /**
   * What renders on Google search results or when unfurled in social apps.
   *
   * @default the dotted US map favicon
   */
  image?: string;
  /**
   * If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".
   *
   * @default 'Congress.wiki
   */
  siteName?: string;
  /**
   * Disable SEO tracking for this page. Useful for error pages.
   *
   * @default false
   */
  noTrack?: boolean;
};

/**
 * Metadata tags that are injected into the header of the page.
 *
 * These metadata tags are used by:
 * - search engines to index the site.
 * - social media sites to preview links.
 * - browsers to allow zoom and pinch to zoom.
 * - and other services to display your site correctly.
 *
 */
const Metadata = (props: MetadataProps) => {
  const {
    title,
    path,
    keywords = [''],
    image = icon144.src,
    type = 'article',
    author = 'Ryan Parker',
    siteName = 'Congress.wiki',
    noTrack,
    ...delegated
  } = props;

  if (noTrack) {
    return (
      <Head {...delegated}>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge; chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="robots" content="noindex" />
      </Head>
    );
  }

  const fullUrl = `https://congress.wiki${path}`;
  const keywordsCsv = keywords.join(',');
  const description = props.description500 || 'A modern view of US Congress.';
  const description100 = truncate(props.description100 || description, 100);
  const description200 = truncate(props.description200 || description, 200);
  const description500 = truncate(description, 500);
  // const favicon = `${BASE_URL}/favicon.ico`;
  return (
    <Head {...delegated}>
      {/* <!-- Priority tags. These must come first. --> */}
      {/* <meta charSet="utf-8" /> */}
      {/* <!-- Render Chrome if available or using latest version of Internet Explorer (Recommended). --> */}
      {/* <meta httpEquiv="x-ua-compatible" content="ie=edge; chrome=1" /> */}
      {/* This tag was invented by Apple as a way to disable some of the "optimizations" that the browser makes. Android quickly adopted it as well, and it's [making its way](https://drafts.csswg.org/css-device-adapt/#viewport-meta) into the CSS specification. */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      {/* <!-- Search Engine and Browser Meta Tags. --> */}
      {/* <!-- Keep under 500 characters --> */}
      <meta name="description" content={description500} key="desc" />
      {/* <!-- Keep under 100 characters --> */}
      <meta name="abstract" content={description100} />
      {/* <!-- General, 14 Years, Mature or Restricted --> */}
      <meta name="rating" content="General" />
      {/* <!-- Open Graph Meta Tags (ogp.me) --> */}
      {/*  <!-- Web page thumbnail (can be multiple) --> */}
      {/* An image URL which should represent your object within the graph. */}
      <meta property="og:image" content={image} />
      {/* <!-- Web site title --> */}
      {/*  If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb". */}
      <meta property="og:site_name" content={siteName} />
      {/* <!-- Web page title --> */}
      <meta property="og:title" content={title} />
      {/* <!-- Web page description --> */}
      <meta property="og:description" content={description500} />
      {/* <!-- Content type ["product", "blog", "website", "book", "movie", ... ] --> */}
      {/* The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required. */}
      <meta property="og:type" content={type} />
      {/*  <!-- Url to this web page --> */}
      {/*  The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "https://www.imdb.com/title/tt0117500/". */}
      <meta property="og:url" content={fullUrl} />
      {keywordsCsv && <meta name="keywords" content={keywordsCsv} />}
      {/* <meta name="author" content={author} /> */}
      {/* <!-- Main Language --> */}
      <meta property="og:locale" content="en_US" />
      {/* <!-- Geographical coordenate --> */}
      {/* <meta property="og:latitude" content="50.97590" /> */}
      {/* <!-- Geographical coordenate --> */}
      {/* <meta property="og:longitude" content="0.017221" /> */}
      {/*  <!-- Postal Address --> */}
      {/* <meta property="og:street-address" content="Flat 1, 26 Street Name" /> */}
      {/*  <!-- Locality --> */}
      <meta property="og:locality" content="America" />
      {/* <!-- Region --> */}
      <meta property="og:region" content="WA" />
      {/* <!-- Post code --> */}
      <meta property="og:postal-code" content="98101" />
      {/*  <!-- Country --> */}
      <meta property="og:country-name" content="US" />
      {/* <!-- Contact email --> */}
      {/* <meta property="og:email" content="email@example.com" /> */}
      {/* <!-- Twitter Meta Tags. --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@WikiCongress" />
      <meta name="twitter:creator" content="@RyanisParker" />
      <meta name="twitter:url" content={fullUrl} />
      {/*  The title of your object as it should appear within the graph, e.g., "The Rock". */}
      <meta name="twitter:title" content={title} />
      {/* Content description less than 200 characters */}
      <meta name="twitter:description" content={description200} />
      <meta name="twitter:image" content={image} />
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      {/* <!-- Favicon Meta Tags.  --> */}
      <link rel="icon" href={icon48.src} />
      <link rel="icon" href={icon48.src} sizes="48x48" type="image/png" />
      <link rel="icon" href={icon72.src} sizes="72x72" type="image/png" />
      <link rel="icon" href={icon96.src} sizes="96x96" type="image/png" />
      <link rel="icon" href={icon144.src} sizes="144x144" type="image/png" />
      <link rel="icon" href={icon192.src} sizes="192x192" type="image/png" />
      <link rel="icon" href={icon256.src} sizes="256x256" type="image/png" />
      <link rel="icon" href={icon384.src} sizes="384x384" type="image/png" />
      <link rel="icon" href={icon512.src} sizes="512x512" type="image/png" />
      <link rel="shortcut icon" href={icon48.src} />
      {/* <!-- Web App Settings. --> */}
      {/* <meta name="application-name" content="Congress.wiki" /> */}
      {/* <meta name="mobile-web-app-capable" content="yes" /> */}
      {/* <!-- Apple iOS Settings. --> */}
      {/* <meta name="apple-mobile-web-app-capable" content="yes" /> */}
      {/* <meta name="apple-mobile-web-app-status-bar-style" content="black" /> */}
      {/* <meta name="apple-mobile-web-app-title" content="Congress.wiki" /> */}
    </Head>
  );
};

Metadata.displayName = 'Metadata';
export default Metadata;
