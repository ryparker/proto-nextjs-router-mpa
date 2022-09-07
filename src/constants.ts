/* Responsive breakpoints */
export const WEIGHTS = {
  normal: 400,
  bold: 600,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const isBrowser = typeof window !== 'undefined';
export const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
export const IS_DEV = !IS_PROD;
export const ENABLE_PARTYTOWN_LOGS = IS_DEV;
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/* Environment variables */
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
