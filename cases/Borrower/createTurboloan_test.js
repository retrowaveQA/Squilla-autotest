/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('Borrower')

Scenario(
  'create_tb_usdt_btc60',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount(2.6)
    turboloanPage.inputLoanAmount(50000)
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Borrower').tag('CI')

