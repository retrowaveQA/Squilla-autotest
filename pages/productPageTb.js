/* eslint-disable no-undef */

const { I } = inject()

module.exports = {
  /// ////////Управление залогом///////////
  // вывести
  withdrawBtn: '#collateralWithdrawalBtn',
  depositWithdrawInput: '#collateralManagementCurrencyField input',
  confrimWithdraw: '#collateralManagementBtn',
  // пополнить
  replenishmentBtn: '#collateralReplenishmentBtn',
  collateralDepositInput: '#collateralManagementCurrencyField input',
  confrimReplenishment: '#collateralManagementBtn',
  /// ////////Платежи///////////
  earlyRepaymentBtn: '#earlyRepaymentDialogOpenBtn',
  earlyRepaymentAmountInput: "#earlyRepaymentCurrencyField input",
  confirmEarlyRepaymentBtn: '#earlyRepaymentBtn',
  /// ////////Состояние обеспечения///////////
  // ликвидация
  liquidateBtn: '#liquidationDialogOpenBtn',
  confrimLiquidate: '#voluntaryLiquidationBtn',
  /// /////Функции Управления залогом////////
  // пополнение
  setReplenishment() {
    I.waitForVisible(this.replenishmentBtn, 20)
    I.click(this.replenishmentBtn)
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
}
