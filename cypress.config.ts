import { defineConfig } from 'cypress';

// https://cypress.visual-image-diff.dev/
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/plugin';

const prot = process.env.PORT || 8000;

export default defineConfig({
  e2e: {
    defaultBrowser: 'chrome',
    baseUrl: `http://localhost:${prot}`,
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
});
