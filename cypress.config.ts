import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 720,
  viewportWidth: 1080,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8000',
    specPattern: 'cypress/e2e/**/*.spec.*',
    supportFile: "cypress/support/e2e.{jsx,ts,tsx}",
  }
})
