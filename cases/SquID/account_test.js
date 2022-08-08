/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('SquID')

Scenario.skip('upload_avatar', ({ I, mainPage, accountPage }) => {
  I.amOnPage('/')
  mainPage.login('mithunverification@squilla.io', '+Z;!=l~N]aJN@~)K3U<4EmQ7')
  mainPage.chekLogin()
  I.wait(2)
  accountPage.openUserAccount()
  accountPage.attachAvatar()
}
)
