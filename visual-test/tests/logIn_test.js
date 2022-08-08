/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('screenshot index test')

Scenario('screenshot logIn test', ({ I, mainPage }) => {
  I.amOnPage('/')
  I.click('#headerLogin')
  I.saveScreenshot("logIn_page.png", false);
  I.seeVisualDiff("logIn_page.png", {tolerance: 2, prepareBaseImage: false});
})
