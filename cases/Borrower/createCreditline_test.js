/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('Borrower')

Scenario(
  'create_cl_usdt_btc',
  ({ I, mainPage, sideMenu, creditlinePage }) => {
    allure.feature('Borrower')
    allure.story('Borrower makes an application CL')

    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')

    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()

    I.wait(0.5)
    creditlinePage.inputDepositAmount('3')
    creditlinePage.inputLoanAmount(50000)
    creditlinePage.setPaymentPeriodTwiceMonth()
    creditlinePage.submitCreditLine()
    creditlinePage.checkSuccessApplication()
  }
).tag('Borrower').tag('CI')

