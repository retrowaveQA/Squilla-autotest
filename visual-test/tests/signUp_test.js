/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('screenshot index test')

Scenario('screenshot signUp test', ({ I, mainPage }) => {
  I.amOnPage('/')
  I.click('#headerRegister')
  I.saveScreenshot("signUp_page.png", false);
  I.seeVisualDiff("signUp_page.png", {tolerance: 2, prepareBaseImage: false});
})
