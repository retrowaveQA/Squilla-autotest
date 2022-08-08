/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('Borrower')

/// ///////////////Досрочное погашение//////////////////
// часть начисленных процентов
Scenario(
  'manageCl Repayment: less than percent',
  ({
    I,
    mainPage,
    sideMenu,
    creditlinePage,
    productPageCl,
  }) => {
  allure.feature('Borrower')
  allure.story('Досрочное погашение: "меньше начисленных процентов"')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.inputDepositAmount('1')
    creditlinePage.inputLoanAmount('15000')
    creditlinePage.submitCreditLine()
    I.wait(0.5)
    creditlinePage.goToDetails()
    productPageCl.setEarlyRepayment()
    productPageCl.inputAmountEarlyRepayment('2,5')
    productPageCl.submitEarlyRepayment()
    I.see('Досрочное погашение займа')
  }
).tag('Borrower').tag('CI').tag('CL_edit')
// все начисленные проценты
Scenario(
  'manageCl Repayment: all percentages',
  ({
    I,
    mainPage,
    sideMenu,
    creditlinePage,
    productPageCl,
  }) => {
  allure.feature('Borrower')
  allure.story('Досрочное погашение: "все начисленные проценты"')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.inputDepositAmount('1')
    creditlinePage.inputLoanAmount('15000')
    creditlinePage.submitCreditLine()
    I.wait(0.5)
    creditlinePage.goToDetails()
    productPageCl.setEarlyRepayment()
    productPageCl.inputAmountEarlyRepayment('4,94')
    productPageCl.submitEarlyRepayment()
    I.see('Досрочное погашение займа')
  }
).tag('Borrower').tag('CI').tag('CL_edit')
// начисленнные проценты + часть тело займа
Scenario(
  'manageCl Repayment: loan body part',
  ({
    I,
    mainPage,
    sideMenu,
    creditlinePage,
    productPageCl,
  }) => {
  allure.feature('Borrower')
  allure.story('Досрочное погашение: "часть тело займа"')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.inputDepositAmount('1')
    creditlinePage.inputLoanAmount('15000')
    creditlinePage.submitCreditLine()
    I.wait(0.5)
    creditlinePage.goToDetails()
    productPageCl.setEarlyRepayment()
    productPageCl.inputAmountEarlyRepayment('5004,94')
    productPageCl.submitEarlyRepayment()
    I.see('Досрочное погашение займа')
  }
).tag('Borrower').tag('CI').tag('CL_edit')
// начисленнные проценты + всё тело (закрытие)
Scenario(
  'manageCl Repayment: all',
  ({
    I,
    mainPage,
    sideMenu,
    creditlinePage,
    productPageCl,
  }) => {
  allure.feature('Borrower')
  allure.story('Досрочное погашение: "проценты + часть тела"')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.inputDepositAmount('1')
    creditlinePage.inputLoanAmount('15000')
    creditlinePage.submitCreditLine()
    I.wait(0.5)
    creditlinePage.goToDetails()
    productPageCl.setEarlyRepayment()
    productPageCl.inputAmountEarlyRepayment('15004,931506')
    productPageCl.submitEarlyRepayment()
    I.see('Досрочное погашение займа')
  }
).tag('Borrower').tag('CI').tag('CL_edit')

/// ///////////////Управление залогом//////////////////
// пополнение
Scenario(
  'manageCl Deposit replenishment',
  ({
    I,
    mainPage,
    sideMenu,
    creditlinePage,
    productPageCl,
  }) => {
  allure.feature('Borrower')
  allure.story('Пополнение средств')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.inputDepositAmount('1')
    creditlinePage.inputLoanAmount('15000')
    creditlinePage.submitCreditLine()
    I.wait(0.5)
    creditlinePage.goToDetails()
    productPageCl.setReplenishment()
    productPageCl.inputReplenishment('1')
    productPageCl.submitReplenishment()
    I.see('Вы успешно пополнили залог на')
  }
).tag('Borrower').tag('CI').tag('CL_edit')
// вывод
Scenario(
  'manageCl Withdrawal of the deposit',
  ({
    I,
    mainPage,
    sideMenu,
    creditlinePage,
    productPageCl,
  }) => {
  allure.feature('Borrower')
  allure.story('Вывод средств')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.inputDepositAmount('1')
    creditlinePage.inputLoanAmount('15000')
    creditlinePage.submitCreditLine()
    I.wait(0.5)
    creditlinePage.goToDetails()
    productPageCl.setWithdrawBtn()
    productPageCl.inputDepositWithdraw('0,3')
    productPageCl.submitWithdraw()
    I.see('Вы успешно вывели со счета залога на Squilla Walle')
  }
).tag('Borrower').tag('CI').tag('CL_edit')
/// ///////////////Общая информация//////////////////
// увеличить кредитный лимит
Scenario(
  'manageCl add credit limit',
  ({
    I,
    mainPage,
    sideMenu,
    creditlinePage,
    productPageCl,
  }) => {
  allure.feature('Borrower')
  allure.story('Увеличение кредитного лимита')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.inputDepositAmount('1')
    creditlinePage.inputLoanAmount('15000')
    creditlinePage.submitCreditLine()
    I.wait(0.5)
    creditlinePage.goToDetails()
    productPageCl.setCreditLimit()
    productPageCl.inputDepositAmount('1')
    productPageCl.submitСreditLimit()
    I.see('Вы успешно пополнили залог на')
  }
).tag('Borrower').tag('CI').tag('CL_edit')
// доп заём
Scenario(
  'manageCl Additional loan',
  ({
    I,
    mainPage,
    sideMenu,
    creditlinePage,
    productPageCl,
  }) => {
  allure.feature('Borrower')
  allure.story('Дополнительный заём')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.inputDepositAmount('1')
    creditlinePage.inputLoanAmount('15000')
    creditlinePage.submitCreditLine()
    I.wait(0.5)
    creditlinePage.goToDetails()
    productPageCl.setGetAloan()
    productPageCl.inputAdditionalLoan('2500')
    productPageCl.submitTakeAloanbutton()
    I.see('Вы успешно увеличили займ. На ваш счет поступило')
  }
).tag('Borrower').tag('CI').tag('CL_edit')
/// ///////////////Состояние обеспечения//////////////////
// ликвидация
Scenario(
  'manageCl Liquidate',
  ({
    I,
    mainPage,
    sideMenu,
    creditlinePage,
    productPageCl,
  }) => {
  allure.feature('Borrower')
  allure.story('Ликвидация')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    sideMenu.setCreditLine()
    creditlinePage.openApplicationForm()
    I.wait(0.5)
    creditlinePage.inputDepositAmount('1')
    creditlinePage.inputLoanAmount('15000')
    creditlinePage.submitCreditLine()
    I.wait(0.5)
    creditlinePage.goToDetails()
    productPageCl.setLiquidate()
    productPageCl.submitLiquidate()
    I.see('Вы успешно провели добровольную ликвидацию')
  }
).tag('Borrower').tag('CI').tag('CL_edit')
