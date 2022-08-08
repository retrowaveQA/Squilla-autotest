/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('Creditor')


Scenario(
  'replenishment_investment_fund_DAI',
  ({ I, mainPage, sideMenu, creditorPage }) => {
      allure.feature('Creditor')
      allure.story('replenishment investment fund DAI')

      I.amOnPage('/')
      mainPage.login('x222202@yandex.ru', 'Newbie_228')
      I.wait(0.5)

      sideMenu.setDepositsSavingsAccounts()
      creditorPage.setApplication()

      I.wait(0.5)
      creditorPage.inputDepositAmount("1500")
      creditorPage.submitInvestmentFundBtn()
      creditorPage.checkSuccessApplication()
      I.wait(0.5)
      creditorPage.setReplenishmen()
      creditorPage.inputReplenishmentAmount("500")
      creditorPage.confirmReplenishmentBtn()
      creditorPage.checkReplenishment()
  }
).tag('Creditor').tag('CI')


Scenario(
  'withdraw_investment_fund_DAI',
  ({ I, mainPage, sideMenu, creditorPage }) => {
      allure.feature('Creditor')
      allure.story('withdraw investment fund DAI')

      I.amOnPage('/')
      mainPage.login('x222202@yandex.ru', 'Newbie_228')
      I.wait(0.5)

      sideMenu.setDepositsSavingsAccounts()
      creditorPage.setApplication()

      I.wait(0.5)
      creditorPage.inputDepositAmount("1500")
      creditorPage.submitInvestmentFundBtn()
      creditorPage.checkSuccessApplication()
      I.wait(0.5)
      creditorPage.setWithdraw()
      creditorPage.inputWithdrawalAmount("500")
      creditorPage.confirmWithdraw()
      creditorPage.checkWithdraw()
  }
).tag('Creditor').tag('CI')

//////

Scenario(
  'replenishment_investment_fund_USDT',
  ({ I, mainPage, sideMenu, creditorPage }) => {
      allure.feature('Creditor')
      allure.story('replenishment investment fund USDT')

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
      I.wait(0.5)
      creditorPage.setReplenishmen()
      creditorPage.inputReplenishmentAmount("500")
      creditorPage.confirmReplenishmentBtn()
      creditorPage.checkReplenishment()
  }
).tag('Creditor').tag('CI')

Scenario(
  'withdraw_investment_fund_USDT',
  ({ I, mainPage, sideMenu, creditorPage }) => {
      allure.feature('Creditor')
      allure.story('withdraw investment fund USDT')

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
      I.wait(0.5)
      creditorPage.setWithdraw()
      creditorPage.inputWithdrawalAmount("500")
      creditorPage.confirmWithdraw()
      creditorPage.checkWithdraw()
  }
).tag('Creditor').tag('CI')