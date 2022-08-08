/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('screenshot profile test')

Scenario('screenshot verification test', ({ I, mainPage, sideMenu }) => {
  I.amOnPage('/')
  mainPage.login('x222202@yandex.ru', 'Newbie_228')
  I.wait(5)
  sideMenu.setVerefication()
  I.wait(3)
  I.saveScreenshot("verification_page.png", false);
  I.seeVisualDiff("verification_page.png", {tolerance: 2, prepareBaseImage: false});
})