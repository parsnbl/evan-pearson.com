/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})


const config: Config = {

  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^@/(.*)$' : '<rootDir>/$1',
    '^@public/(.*)$': '<rootDir>/public/$1'
  }
};

export default createJestConfig(config);
