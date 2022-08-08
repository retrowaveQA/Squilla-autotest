/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('screenshot borrower test')

Scenario('screenshot turbo_loan Form test', ({ I, mainPage, sideMenu, turboloanPage }) => {
  I.amOnPage('/')
  mainPage.login('x222202@yandex.ru', 'Newbie_228')
  I.wait(5)
  sideMenu.setTurboLoan()
  turboloanPage.openApplicationForm()
  I.wait(3)
  I.saveScreenshot("turboLoan_page.png", true);
  I.seeVisualDiff("turboLoan_page.png", {tolerance: 2, prepareBaseImage: false});
})