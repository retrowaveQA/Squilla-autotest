/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('SquID')

Scenario.skip('checkVerification', ({ I, mainPage, verificationPage, sideMenu }) => {
  I.amOnPage('/')
  mainPage.login('mithunverification@squilla.io', '+Z;!=l~N]aJN@~)K3U<4EmQ7')
  I.wait(1)
  I.executeScript(() => localStorage.clear())
  sideMenu.setVerefication()
  verificationPage.openVerificationForm()
  verificationPage.inputFirstName('Mithun')
  verificationPage.inputLastName('Chakraborty')
  verificationPage.inputMiddleName('Bollywood')
  verificationPage.inputDateBirth('27.10.1989')
  verificationPage.setGenderM()
  verificationPage.goStepTwo()
  verificationPage.setCountry()
  verificationPage.inputIndex('222202555')
  verificationPage.setDocument()
  verificationPage.setCountryDoc()
  verificationPage.goStepThree()
  pause()
})
