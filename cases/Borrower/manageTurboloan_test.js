/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('Borrower')

/// ///////////////Досрочное погашение//////////////////
// часть начисленных процентов
Scenario(
  'manageTb Repayment: part accrued percent',
  ({
    I,
    mainPage,
    creditlinePage,
    sideMenu,
    turboloanPage,
    productPageTb,
  }) => {
  allure.feature('Borrower')
  allure.story('Досрочное погашение: "часть начисленных процентов"')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount('1')
    turboloanPage.inputLoanAmount('20000')
    turboloanPage.submitTurboLoan()
    creditlinePage.goToDetails()
    productPageTb.setEarlyRepayment()
    productPageTb.inputAmountEarlyRepayment('3,58')
    productPageTb.submitEarlyRepayment()
    I.see('Вы успешно досрочно погасили займ на сумму')
  }
).tag('Borrower').tag('CI').tag('TB_edit')
// все начисленные проценты
Scenario(
  'manageTb Repayment: all percentages',
  ({
    I,
    mainPage,
    creditlinePage,
    sideMenu,
    turboloanPage,
    productPageTb,
  }) => {
  allure.feature('Borrower')
  allure.story('Досрочное погашение: "все начисленные проценты"')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount('1')
    turboloanPage.inputLoanAmount('20000')
    turboloanPage.submitTurboLoan()
    creditlinePage.goToDetails()
    productPageTb.setEarlyRepayment()
    productPageTb.inputAmountEarlyRepayment('6,575342')
    productPageTb.submitEarlyRepayment()
    I.see('Вы успешно досрочно погасили займ на сумму')
  }
).tag('Borrower').tag('CI').tag('TB_edit')
// начисленнные проценты + часть тело займа
Scenario(
  'manageTb Repayment: loan body part',
  ({
    I,
    mainPage,
    creditlinePage,
    sideMenu,
    turboloanPage,
    productPageTb,
  }) => {
  allure.feature('Borrower')
  allure.story('Досрочное погашение: "часть тело займа"')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount('1')
    turboloanPage.inputLoanAmount('20000')
    turboloanPage.submitTurboLoan()
    creditlinePage.goToDetails()
    productPageTb.setEarlyRepayment()
    productPageTb.inputAmountEarlyRepayment('10000')
    productPageTb.submitEarlyRepayment()
    I.see('Вы успешно досрочно погасили займ на сумму')
  }
).tag('Borrower').tag('CI').tag('TB_edit')
// начисленнные проценты + всё тело
Scenario(
  'manageTb Repayment: all',
  ({
    I,
    mainPage,
    creditlinePage,
    sideMenu,
    turboloanPage,
    productPageTb,
  }) => {
  allure.feature('Borrower')
  allure.story('Досрочное погашение: "проценты + всё тело"')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    turboloanPage.openApplicationForm()
    I.wait(0.5)
    turboloanPage.inputDepositAmount('1')
    turboloanPage.inputLoanAmount('20000')
    turboloanPage.submitTurboLoan()
    creditlinePage.goToDetails()
    productPageTb.setEarlyRepayment()
    productPageTb.inputAmountEarlyRepayment('20006,575342')
    productPageTb.submitEarlyRepayment()
    I.see('Поздравляем! Вы успешно закрыли сделку по')
  }
).tag('Borrower').tag('CI').tag('TB_edit')

/// ///////////////Eправление залогом//////////////////
// пополнение
Scenario(
  'manageTb Deposit replenishment',
  ({
    I,
    mainPage,
    creditlinePage,
    sideMenu,
    turboloanPage,
    productPageTb,
  }) => {
  allure.feature('Borrower')
  allure.story('Пополнение средств')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount('1')
    turboloanPage.inputLoanAmount('20000')
    turboloanPage.submitTurboLoan()
    creditlinePage.goToDetails()
    productPageTb.setReplenishment()
    productPageTb.inputReplenishment('0,55')
    productPageTb.submitReplenishment()
    I.see('Вы успешно пополнили залог на')
  }
).tag('Borrower').tag('CI').tag('TB_edit')
// вывод
Scenario(
  'manageTb Withdrawal of the deposit',
  ({
    I,
    mainPage,
    creditlinePage,
    sideMenu,
    turboloanPage,
    productPageTb,
  }) => {
  allure.feature('Borrower')
  allure.story('Вывод средств')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount('1')
    turboloanPage.inputLoanAmount('20000')
    turboloanPage.submitTurboLoan()
    creditlinePage.goToDetails()
    productPageTb.setWithdrawBtn()
    productPageTb.inputDepositWithdraw('0,11')
    productPageTb.submitWithdraw()
    I.see('Вы успешно вывели со счета залога на Squilla Walle')
  }
).tag('Borrower').tag('CI').tag('TB_edit')
/// ///////////////Состояние обеспечения//////////////////
// ликвидация
Scenario(
  'manageTb Liquidate',
  ({
    I,
    mainPage,
    creditlinePage,
    sideMenu,
    turboloanPage,
    productPageTb,
  }) => {
  allure.feature('Borrower')
  allure.story('Ликвидация')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setTurboLoan()
    I.wait(0.5)
    turboloanPage.openApplicationForm()
    turboloanPage.inputDepositAmount('1')
    turboloanPage.inputLoanAmount('20000')
    turboloanPage.submitTurboLoan()
    creditlinePage.goToDetails()
    productPageTb.setLiquidate()
    productPageTb.submitLiquidate()
    I.see('Вы успешно провели добровольную ликвидацию')
  }
).tag('Borrower').tag('CI').tag('TB_edit')
