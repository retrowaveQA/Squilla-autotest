/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('Borrower')

Scenario.skip(
  'Pairwise_create_cl_usdt_eth',
  ({ I, mainPage, sideMenu, creditlinePage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.setCollateralCurrencyEth()
    creditlinePage.inputDepositAmount(41)
    creditlinePage.inputLoanAmount(50000)
    creditlinePage.setPaymentPeriodTwiceMonth()
    creditlinePage.submitCreditLine()
    creditlinePage.checkSuccessApplication()
  }
).tag('PairwiseCl')
Scenario.skip(
  'Pairwise_create_cl_usdt_wbtc',
  ({ I, mainPage, sideMenu, creditlinePage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.setCollateralCurrencyWbtc()
    creditlinePage.inputDepositAmount(1)
    creditlinePage.inputLoanAmount(2500)
    creditlinePage.submitCreditLine()
    creditlinePage.checkSuccessApplication()
  }
).tag('Pairwise')
Scenario.skip(
  'Pairwise_create_cl_dai_eth',
  ({ I, mainPage, sideMenu, creditlinePage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.setCreditLineDai()
    creditlinePage.setCollateralCurrencyEth()
    creditlinePage.inputDepositAmount(41)
    creditlinePage.inputLoanAmount(50000)
    creditlinePage.submitCreditLine()
    creditlinePage.checkSuccessApplication()
  }
).tag('Pairwise')
Scenario.skip(
  'Pairwise_create_cl_dai_wbtc',
  ({ I, mainPage, sideMenu, creditlinePage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.setCreditLineDai()
    creditlinePage.setCollateralCurrencyWbtc()
    creditlinePage.inputDepositAmount(0.14)
    creditlinePage.inputLoanAmount(2500)
    creditlinePage.setPaymentPeriodTwiceMonth()
    creditlinePage.submitCreditLine()
    creditlinePage.checkSuccessApplication()
  }
).tag('Pairwise')
Scenario.skip(
  'Pairwise_create_credit_line_DAI_BTC',
  ({ I, mainPage, sideMenu, creditlinePage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    // вейты заменить на I.waitForVisible();
    I.wait(0.5)
    creditlinePage.setCreditLineDai()
    creditlinePage.inputDepositAmount(2.5)
    creditlinePage.inputLoanAmount(50000)
    creditlinePage.submitCreditLine()
    creditlinePage.checkSuccessApplication()
  }
).tag('Pairwise')
Scenario.skip(
  'Pairwise_create_cl_dai_btc2',
  ({ I, mainPage, sideMenu, creditlinePage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.setCreditLineDai()
    creditlinePage.inputDepositAmount(0.13)
    creditlinePage.inputLoanAmount(2500)
    creditlinePage.setPaymentPeriodTwiceMonth()
    creditlinePage.submitCreditLine()
    creditlinePage.checkSuccessApplication()
  }
).tag('Pairwise')