/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('Borrower')


Scenario.skip(
  'Pairwise_create_tb_usdt_wbtc90',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.setCollateralCurrencyWbtc()
    turboloanPage.inputDepositAmount(0.04)
    turboloanPage.inputLoanAmount(500)
    turboloanPage.setPaymentPeriodNinetyDays()
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_create_tb_usdt_wbtc30',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.setCollateralCurrencyWbtc()
    turboloanPage.inputDepositAmount(0.03)
    turboloanPage.inputLoanAmount(500)
    turboloanPage.setPaymentPeriodThirtyDays()
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_tb_usdt_eth60',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
   allure.feature('Borrower')
   allure.story('Borrower makes an application TB')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    turboloanPage.openApplicationForm()
    I.wait(0.5)
    turboloanPage.setCollateralCurrencyEth()
    turboloanPage.inputDepositAmount(45)
    turboloanPage.inputLoanAmount(50000)
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_create_tb_usdt_btc90',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.setCollateralCurrencyEth()
    turboloanPage.inputDepositAmount(0.03)
    turboloanPage.inputLoanAmount(500)
    turboloanPage.setPaymentPeriodNinetyDays()
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_create_tb_usdt_eth30',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount(44)
    turboloanPage.inputLoanAmount(50000)
    turboloanPage.setPaymentPeriodThirtyDays()
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_create_tb_dai_eth30',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.setCollateralCurrencyEth()
    turboloanPage.inputDepositAmount(44)
    turboloanPage.inputLoanAmount(50000)
    turboloanPage.setPaymentPeriodThirtyDays()
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_create_tb_dai_eth60',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.setCollateralCurrencyWbtc()
    turboloanPage.inputDepositAmount(0.03)
    turboloanPage.inputLoanAmount(500)
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_create_tb_dai_btc90',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount(0.27)
    turboloanPage.inputLoanAmount(5000)
    turboloanPage.setPaymentPeriodNinetyDays()
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_create_tb_dai_btc30',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount(0.27)
    turboloanPage.inputLoanAmount(5000)
    turboloanPage.setPaymentPeriodThirtyDays()
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_create_tb_dai_btc60',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount(0.03)
    turboloanPage.inputLoanAmount(500)
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')

Scenario.skip(
  'Pairwise_create_tb_dai_eth90',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.setCollateralCurrencyEth()
    turboloanPage.inputDepositAmount(4.6)
    turboloanPage.inputLoanAmount(5000)
    turboloanPage.setPaymentPeriodNinetyDays()
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('PairwiseTb')

Scenario.skip(
  'Pairwise_create_tb_dai_wbtc30',
  ({ I, mainPage, sideMenu, turboloanPage }) => {
  allure.feature('Borrower')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.setCollateralCurrencyWbtc()
    turboloanPage.inputDepositAmount(0.03)
    turboloanPage.inputLoanAmount(500)
    turboloanPage.setPaymentPeriodThirtyDays()
    turboloanPage.submitTurboLoan()
    turboloanPage.checkSuccessApplication()
  }
).tag('Pairwise')