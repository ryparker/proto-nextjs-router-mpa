import React from 'react';
import GlobalStyles from '@components/GlobalStyles';
import GoogleAnalytics from '@components/GoogleAnalytics';
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';
import { MotionConfig } from 'framer-motion';

export type AppLayoutProps = {
  children: React.ReactNode;
  pageProps: any;
};

const AppLayout = (props: AppLayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <GoogleAnalytics />
      <MotionConfig reducedMotion="user">
        <TooltipProvider>{props.children}</TooltipProvider>
      </MotionConfig>
    </>
  );
};

export default AppLayout;
