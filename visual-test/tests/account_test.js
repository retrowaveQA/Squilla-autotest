/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('screenshot profile test')

Scenario('screenshot account test', ({ I, mainPage }) => {
  I.amOnPage('/')
  mainPage.login('x222202@yandex.ru', 'Newbie_228')
  I.wait()
  I.click('#headerUserAvatarBtn')
  I.wait(3)
  I.saveScreenshot("account_page.png", false);
  I.seeVisualDiff("account_page.png", {tolerance: 2, prepareBaseImage: false});
})
