import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: [
    "<rootDir>/_tests_/**/*.ts"
  ]
}

export default jestConfig