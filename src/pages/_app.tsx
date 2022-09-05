import type { AppProps } from 'next/app';
import GlobalStyles from '@components/GlobalStyles';

// For Analytics uncomment the following and uncomment the <Script> tags returned below.
// import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* @ts-ignore stupid TS thinks global styles isn't a thing. */}
      <GlobalStyles />
      {/* Google Analytics
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
