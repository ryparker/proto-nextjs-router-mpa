import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  /* ReachUI style warnings: https://reach.tech/styling/ */
  --reach-dialog: 1;

  /* Elements */
  --color-background: hsl(60deg 100% 99%);
  --color-headline: hsl(204 83% 21%);
  --color-paragraph: 	hsl(212 12% 22%);
  --color-button: 		hsl(206 96% 61%);
  --color-button-back: 		hsl(206 96% 41%);
  --color-button-text: hsl(60 100% 99%);
  /* Trophy colors from Josh's course */
  --dark-gold: hsl(34deg 90% 45%);
  --gold: hsl(44deg 80% 70%);
  --light-gold: hsl(44deg 100% 85%);
  /* Card */
  --color-card-background: hsl(204 83% 21%);
  --color-card-background-active: hsl(330 8% 90%);
  --color-card-headline: hsl(60 100% 99%);
  --color-card-paragraph: hsl(205 95% 92%);
  --color-card-tag-background: hsl(206 96% 61%);
  --color-card-tag-text: hsl(205 95% 92%);
  --color-card-text: hsl(60 100% 100%);
  --color-card-highlight: hsl(348 84% 60%);
  /* Illustration */
  --color-stroke: hsl(204 83% 21%);
  --color-main: 	hsl(60 100% 99%);
  --color-highlight: hsl(206 96% 61%);
  --color-secondary: hsl(205 38% 68%);
  --color-tertiary: hsl(348 84% 60%);
  /* Grays */
  --color-gray50: hsl(60 0% 5%);
  --color-gray100: hsl(60 0% 13%);
  --color-gray200: hsl(60 0% 23%);
  --color-gray300: hsl(60 0% 33%);
  --color-gray400: hsl(60 0% 43%);
  --color-gray500: hsl(60 0% 53%);
  --color-gray600: hsl(60 0% 63%);
  --color-gray700: hsl(60 0% 73%);
  --color-gray800: hsl(60 0% 83%);
  --color-gray900: hsl(60 0% 93%);
  --color-gray1000: hsl(60 0% 100%);
  /* Shadows */
  /* Generated from https://www.joshwcomeau.com/shadow-palette/ */
  --shadow-color: 0deg 0% 0%;
  --shadow-elevation-low:
    0.1px 0.5px 0.6px hsl(var(--shadow-color) / 0.1),
    0.1px 0.8px 0.9px -1.2px hsl(var(--shadow-color) / 0.1),
    0.2px 1.8px 2px -2.5px hsl(var(--shadow-color) / 0.1);
  --shadow-elevation-medium:
    0.1px 0.5px 0.6px hsl(var(--shadow-color) / 0.11),
    0.2px 1.5px 1.7px -0.8px hsl(var(--shadow-color) / 0.11),
    0.5px 3.7px 4.2px -1.7px hsl(var(--shadow-color) / 0.11),
    1.2px 9.1px 10.3px -2.5px hsl(var(--shadow-color) / 0.11);
  --shadow-elevation-high:
    0.1px 0.5px 0.6px hsl(var(--shadow-color) / 0.1),
    0.3px 2.7px 3.1px -0.4px hsl(var(--shadow-color) / 0.1),
    0.6px 5px 5.7px -0.7px hsl(var(--shadow-color) / 0.1),
    1px 8.1px 9.2px -1.1px hsl(var(--shadow-color) / 0.1),
    1.6px 13px 14.7px -1.4px hsl(var(--shadow-color) / 0.1),
    2.6px 20.3px 23px -1.8px hsl(var(--shadow-color) / 0.1),
    3.9px 30.9px 35px -2.1px hsl(var(--shadow-color) / 0.1),
    5.8px 45.6px 51.7px -2.5px hsl(var(--shadow-color) / 0.1);
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin for common elements */
body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd {
  margin: 0;
}

/*
  3. Allow percentage-based heights in the application
*/
html, body, #__next {
  height: 100%
}

/*
  4. Improve the typography across the site.
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: var(--color-background);
  color: var(--color-paragraph);
}

body, input, button, select, option {
  font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
  font-weight: normal;
}

h1, h2, h3, h4, h5, h6, strong {
  font-family: 'Times New Roman', Times, serif;
  font-weight: normal;
  color: var(--color-headline);
}

/* 5. Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* 6. Inherit fonts for inputs and buttons */
input, button, textarea, select {
  font: inherit;
}


/*
  7. Create a root stacking context
*/
#__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
