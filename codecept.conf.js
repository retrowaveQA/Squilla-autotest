const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
 setHeadlessWhen(process.env.HEADLESS);

const standDomain = process.env.STAND_DOMAIN ? process.env.STAND_DOMAIN : 'http://loans.staging.dev.sqilla-lab.com'

const config = {
  tests: './cases/*/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: standDomain,
      show: true,
      browser: 'chromium',
      windowSize: '1920x1080',
    },
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/mainPage.js',
    accountPage: './pages/accountPage.js',
    verificationPage: './pages/verificationPage.js',
    creditlinePage: './pages/creditlinePage.js',
    turboloanPage: './pages/turboloanPage.js',
    sideMenu: './pages/sideMenu.js',
    productPageCl: './pages/productPageCl.js',
    productPageTb: './pages/productPageTb.js',
    creditorPage: './pages/creditorPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: process.env.API_KEY || 'vsf0f1111chg', // pass in api key via config or env variable
    },
  },
};

exports.config = config;
