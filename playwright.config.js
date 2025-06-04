const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  fullyParallel: false, // Run tests sequentially to avoid port conflicts
  workers: 1,
  reporter: 'list',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 }
      },
    },
  ],
  webServer: {
    command: 'node tests/e2e/test-server.js',
    port: 54321,
    reuseExistingServer: false,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});