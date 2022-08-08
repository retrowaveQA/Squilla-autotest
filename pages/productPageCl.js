/* eslint-disable no-undef */

const { I } = inject()

module.exports = {
  /// /////////Общая информация////////////
  // увеличить кредитный лимит
  increaseCreditLimitBtn: '#increaseCreditLimitBtn',
  depositAmountInput: '#collateralManagementCurrencyField input',
  confrimTransferDeposit: '#collateralManagementBtn',
  // доп заём
  getAloanBtn: "#getLoanBtn",
  additionalLoanInput: '#additionalLoanCurrencyField input',
  confrimTakeAloan: '#additionalLoanBtn',
  /// ////////Управление залогом///////////
  // вывести
  withdrawBtn: '#collateralWithdrawalBtn',
  depositWithdrawInput: '#collateralManagementCurrencyField input',
  confrimWithdraw: '#collateralManagementBtn',
  // пополнить
  replenishmentBtn: '#collateralReplenishmentBtn',
  collateralDepositInput: '#collateralManagementCurrencyField input',
  confrimReplenishment: '#collateralManagementBtn',
  /// ////////Состояние обеспечения///////////
  liquidateBtn: '#liquidationDialogOpenBtn',
  confrimLiquidate: '#voluntaryLiquidationBtn',
  /// ////////Платежи//////////
  earlyRepaymentBtn: '#earlyRepaymentDialogOpenBtn',
  earlyRepaymentAmountInput: '#earlyRepaymentCurrencyField input',
  confirmEarlyRepaymentBtn: '#earlyRepaymentBtn',
  /// /////Функции Управления залогом////////
  // пополнение
  setReplenishment() {
    I.waitForVisible(this.replenishmentBtn, 20)
    I.click(this.replenishmentBtn)
  },
  setFdfas() {
    I.click()
  },

  inputReplenishment(deposit) {
    I.clearField(this.collateralDepositInput)
    I.fillField(this.collateralDepositInput, deposit)
  },
  submitReplenishment() {
    I.waitForVisible(this.confrimReplenishment, 20)
    I.click(this.confrimReplenishment)
  },
  // вывод
  setWithdrawBtn() {
    I.waitForVisible(this.withdrawBtn, 20)
    I.click(this.withdrawBtn)
  },
  inputDepositWithdraw(deposit) {
    I.clearField(this.depositWithdrawInput)
    I.fillField(this.depositWithdrawInput, deposit)
  },
  submitWithdraw() {
    I.waitForVisible(this.confrimWithdraw, 20)
    I.click(this.confrimWithdraw)
  },
  /// /////Функции общей информации////////
  // кредитный лимит
  setCreditLimit() {
    I.waitForVisible(this.increaseCreditLimitBtn, 20)
    I.click(this.increaseCreditLimitBtn)
  },
  inputDepositAmount(deposit) {
    I.clearField(this.depositAmountInput)
    I.fillField(this.depositAmountInput, deposit)
  },
  submitСreditLimit() {
    I.waitForVisible(this.confrimTransferDeposit, 20)
    I.click(this.confrimTransferDeposit)
  },
  // доп заём
  setGetAloan() {
    I.waitForVisible(this.getAloanBtn, 20)
    I.click(this.getAloanBtn)
  },
  inputAdditionalLoan(additionalLoan) {
    I.clearField(this.additionalLoanInput)
    I.fillField(this.additionalLoanInput, additionalLoan)
  },
  submitTakeAloanbutton() {
    I.waitForVisible(this.confrimTakeAloan, 20)
    I.click(this.confrimTakeAloan)
  },
  /// /////Функции cостояние обеспечения////////
  // Ликвидация
  setLiquidate() {
    I.waitForVisible(this.liquidateBtn, 20)
    I.click(this.liquidateBtn)
  },
  submitLiquidate() {
    I.waitForVisible(this.confrimLiquidate, 20)
    I.click(this.confrimLiquidate)
  },
  /// /////Функции Платежей////////
  // досрочное погашение
  setEarlyRepayment() {
    I.waitForVisible(this.earlyRepaymentBtn, 20)
    I.click(this.earlyRepaymentBtn)
  },
  inputAmountEarlyRepayment(amount) {
    I.clearField(this.earlyRepaymentAmountInput)
    I.fillField(this.earlyRepaymentAmountInput, amount)
  },
  submitEarlyRepayment() {
    I.waitForVisible(this.confirmEarlyRepaymentBtn, 20)
    I.click(this.confirmEarlyRepaymentBtn)
  },
}
