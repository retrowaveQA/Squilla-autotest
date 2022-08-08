/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('screenshot borrower test')

Scenario('screenshot credit_line Form test', ({ I, mainPage, sideMenu, creditlinePage }) => {
  I.amOnPage('/')
  mainPage.login('x222202@yandex.ru', 'Newbie_228')
  I.wait(5)
  sideMenu.setCreditLine()
  creditlinePage.openApplicationForm()
  I.wait(3)
  I.saveScreenshot("creditLine_page.png", true);
  I.seeVisualDiff("creditLine_page.png", {tolerance: 2, prepareBaseImage: false});
})