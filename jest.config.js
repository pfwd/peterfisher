const { compilerOptions } = require("./tsconfig.json")
const { pathsToModuleNameMapper } = require("ts-jest")
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>",
})


module.exports = {
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testMatch": [
    "**/__tests__/**/*.[jt]sx?(x)",
    "**/?(*.)+(spec|test).[tj]sx?(x)"
  ],
  "roots": [
    "<rootDir>"
  ],
  testEnvironment: "jsdom",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    ...paths
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
}
