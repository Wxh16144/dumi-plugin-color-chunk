// const path = require('path')

const getFailOnMissingBaseline = () => {
  if (process.env.CI) return true;

  const _env = process.env.FAIL_ON_MISSING_BASELINE;
  return _env !== 'false' && _env !== '0';
};

// https://cypress.visual-image-diff.dev/getting-started/custom-config-file
const config = (function () {
  return {
    ROOT_DIR: 'cypress-image-diff',
    SCREENSHOTS_DIR: 'visual-screenshots',
    REPORT_DIR: 'html-report',
    // 如果基线不存在，测试失败
    FAIL_ON_MISSING_BASELINE: getFailOnMissingBaseline(),
    JSON_REPORT: {
      FILENAME: 'cypress_visual_report',
      OVERWRITE: true,
    },
    // https://docs.cypress.io/api/commands/screenshot
    CYPRESS_SCREENSHOT_OPTIONS: {
      padding: 10,
    },
  };
})();

module.exports = config;
