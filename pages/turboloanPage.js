/* eslint-disable no-undef */

const { I } = inject()

module.exports = {
  tabApplication: "#productTabApplication",
  URL: 'app/loans/single?tab=application',
  loanCurrencyDropdown: '#securedLoanProductSelect',
  loanCurrencyUsdt: "//p[contains(text(),'USDT')]",
  loanCurrencyDai: "//p[contains(text(),'DAI')]",
  depositAmountInput: '#securedLoanAmountRangeCollateralAmount input',
  collateralCurrencyDropdown: "#currencySelector_collatera",
  collateralCurrencyBtc: "//p[contains(text(),'BTC')]",
  collateralCurrencytEth: "//p[contains(text(),'ETH')]",
  collateralCurrencyWbtc: "//p[contains(text(),'WBTC')]",
  loanAmountInput: '#securedLoanAmountRangeStableAmount input',
  paymentPeriodDropdown: '#borrowerApplicationTerm',
  thirtyDaysPeriod: "//p[contains(text(),'30 дней')]",
  sixtyDaysPeriod: "//p[contains(text(),'60 дней')]",
  ninetyDaysPeriod: "//p[contains(text(),'90 дней')]",
  confrimTb: '#securedLoanCalculatorSubmitButton',
  successTb: "//h1[contains(text(),'Условия вашего турбозайма')]",
  detailsBtn: "#goToDetails_borrower",

  openApplicationForm() {
    I.waitForVisible(this.tabApplication, 20)
    I.click(this.tabApplication)
  },
  setTurboLoanUsdt() {
    I.waitForVisible(this.loanCurrencyDropdown, 20)
    I.click(this.loanCurrencyDropdown)
    I.waitForVisible(this.loanCurrencyUsdt, 20)
    I.click(this.loanCurrencyUsdt)
  },
  setTurboLoanDai() {
    I.waitForVisible(this.loanCurrencyDropdown, 20)
    I.click(this.loanCurrencyDropdown)
    I.waitForVisible(this.loanCurrencyDai, 20)
    I.click(this.loanCurrencyDai)
  },
  inputDepositAmount(deposit) {
    I.clearField(this.depositAmountInput)
    I.fillField(this.depositAmountInput, deposit)
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
  inputLoanAmount(loanAmount) {
    I.clearField(this.loanAmountInput)
    I.fillField(this.loanAmountInput, loanAmount)
  },
  setPaymentPeriodThirtyDays() {
    I.waitForVisible(this.paymentPeriodDropdown, 20)
    I.click(this.paymentPeriodDropdown)
    I.waitForVisible(this.thirtyDaysPeriod, 20)
    I.click(this.thirtyDaysPeriod)
  },
  setPaymentPeriodSixtyDays() {
    I.waitForVisible(this.paymentPeriodDropdown, 20)
    I.click(this.paymentPeriodDropdown)
    I.waitForVisible(this.sixtyDaysPeriod, 20)
    I.click(this.sixtyDaysPeriod)
  },
  setPaymentPeriodNinetyDays() {
    I.waitForVisible(this.paymentPeriodDropdown, 20)
    I.click(this.paymentPeriodDropdown)
    I.waitForVisible(this.ninetyDaysPeriod, 20)
    I.click(this.ninetyDaysPeriod)
  },
  submitTurboLoan() {
    I.waitForVisible(this.confrimTb, 20)
    I.click(this.confrimTb)
  },
  checkSuccessApplication() {
    I.waitForVisible(this.successTb, 20)
  },
}
