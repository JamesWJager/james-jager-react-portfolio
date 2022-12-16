import type { Config } from 'jest'
import { defaults } from 'jest-config'

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/svgrMock.js',
    '\\.(s?css|less)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}

export default config
