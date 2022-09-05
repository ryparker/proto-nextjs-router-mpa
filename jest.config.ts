/**
 * Using next/jest for info on this config see the below link:
 * https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
 */

import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.jest.test-results.json',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@public/(.*)': ['<rootDir>/public/$1'],
    '^@components/(.*)$': ['<rootDir>/src/components/$1'],
    '^@libs/(.*)$': ['<rootDir>/src/libs/$1'],
    '^@hooks/(.*)$': ['<rootDir>/src/hooks/$1'],
    '^@styles/(.*)$': ['<rootDir>/src/styles/$1'],
    '^@constants$': ['<rootDir>/src/constants'],
    '^@types$': ['<rootDir>/src/types'],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
