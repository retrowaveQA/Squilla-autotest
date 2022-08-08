/* eslint-disable no-undef */

const { I } = inject()

module.exports = {
  tabApplication: "#productTabApplication",
  URL: 'app/loans/credit_line?tab=application',
  loanCurrencyDropdown: '#securedLoanProductSelect',
  loanCurrencyUsdt: "//p[contains(text(),'USDT')]",
  loanCurrencyDai: "//p[contains(text(),'DAI')]",
  depositAmountInput: '#securedLoanAmountRangeCollateralAmount input',
  collateralCurrencyDropdown: "#currencySelector_collateral",
  collateralCurrencyBtc: "//p[contains(text(),'BTC')]",
  collateralCurrencytEth: "//p[contains(text(),'ETH')]",
  collateralCurrencyWbtc: "//p[contains(text(),'WBTC')]",
  loanAmountInput: '#securedLoanAmountRangeStableAmount input',
  paymentPeriodDropdown: '#borrowerApplicationRepaymentPeriod',
  monthlyPeriod: "//span[contains(text(),'Ежемесячно')]",
  twiceamonthPeriod: "//span[contains(text(),'Два раза в месяц')]",
  confrimCl: '#securedLoanCalculatorSubmitButton',
  successCl: "//div[contains(text(),'Поздравляем! Вы успешно оформили кредитную линию')]",
  detailsBtn: "#goToDetails_borrower",


  openApplicationForm() {
    I.waitForVisible(this.tabApplication, 20)
    I.click(this.tabApplication)
  },
    setCreditLineDai() {
    I.waitForVisible(this.loanCurrencyDropdown, 20)
    I.click(this.loanCurrencyDropdown)
    I.waitForVisible(this.loanCurrencyUsdt, 20)
    I.click(this.loanCurrencyUsdt)
  },
  inputDepositAmount(depositAmountInput) {
    I.clearField(this.depositAmountInput)
    I.fillField(this.depositAmountInput, depositAmountInput)
  },
  setCollateralCurrencyEth() {
    I.waitForVisible(this.collateralCurrencyDropdown, 20)
    I.click(this.collateralCurrencyDropdown)
    I.waitForVisible(this.collateralCurrencytEth, 20)
    I.click(this.collateralCurrencytEth)
  },
  setCollateralCurrencyWbtc() {
    I.waitForVisible(this.collateralCurrencyDropdown, 20)
    I.click(this.collateralCurrencyDropdown)
    I.waitForVisible(this.collateralCurrencyWbtc, 20)
    I.click(this.collateralCurrencyWbtc)
  },
  inputLoanAmount(loanAmountInput) {
    I.clearField(this.loanAmountInput)
    I.fillField(this.loanAmountInput, loanAmountInput)
  },
  setPaymentPeriodTwiceMonth() {
    I.waitForVisible(this.paymentPeriodDropdown, 20)
    I.click(this.paymentPeriodDropdown)
    I.waitForVisible(this.twiceamonthPeriod, 20)
    I.click(this.twiceamonthPeriod)
  },
  submitCreditLine() {
    I.waitForVisible(this.confrimCl, 20)
    I.click(this.confrimCl)
  },
  goToDetails() {
    I.waitForVisible(this.detailsBtn, 10)
    I.click(this.detailsBtn)
  },
  checkSuccessApplication() {
    I.waitForVisible(this.successCl, 10)
  },
}
