/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('Creditor')

Scenario(
  'open_investment_fund_DAI',
  ({ I, mainPage, sideMenu, creditorPage }) => {
      allure.feature('Creditor')
      allure.story('open investment fund DAI')

      I.amOnPage('/')
      mainPage.login('x222202@yandex.ru', 'Newbie_228')
      I.wait(0.5)

      sideMenu.setDepositsSavingsAccounts()
      creditorPage.setApplication()

      I.wait(0.5)
      creditorPage.inputDepositAmount("1500")
      creditorPage.submitInvestmentFundBtn()
      creditorPage.checkSuccessApplication()
  }
  ).tag('Creditor').tag('CI')


Scenario(
  'open_investment_fund_USDT',
  ({ I, mainPage, sideMenu, creditorPage }) => {
      allure.feature('Creditor')
      allure.story('open investment fund USDT')

      I.amOnPage('/')
      mainPage.login('x222202@yandex.ru', 'Newbie_228')
      I.wait(0.5)

      sideMenu.setDepositsSavingsAccounts()
      creditorPage.setApplication()

      I.wait(0.5)
      creditorPage.setCollateralCurrencyUSDT()
      creditorPage.inputDepositAmount("1500")
      creditorPage.submitInvestmentFundBtn()
      creditorPage.checkSuccessApplication()
  }
  ).tag('Creditor').tag('CI')