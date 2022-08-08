/* eslint-disable no-undef */

const { I } = inject()

module.exports = {
    url: "/app/deposits/savings-accounts",
    productTabList: "#productTabList",
    productTabApplication: "#productTabApplication",
    productTabApplicationsPending: "#productTabApplicationsPending",
    depositAmountInput: "#investmentFundAmountRange input",
    currencySelector: "#currencySelector_stable",
    currencyDai: "//p[contains(text(),'DAI')]",
    currencyUsdt: "//p[contains(text(),'USDT')]",
    confirmOpeningBtn: "#openInvestmentFundBtn",
    detailsBtn: "#goToDetails_creditor",
/////////// Manage ///////////
    replenishmentBtn: "#openCreditorManagementDialogReplenishment",
    replenishmentAmountInput: "#creditorManagementCurrencyField input",
    confirmReplenishmentBtn: "#creditorManagementBtn",
    successReplenishment: "//h5[contains(text(),'Пополнение накопительного счета')]",

    withdrawBtn: "#openCreditorManagementDialogWithdrawal",
    withdrawalAmountInput: "#creditorManagementCurrencyField input",
    confirmWithdrawBtn: "#creditorManagementBtn",
    successWithdraw: "//h1[contains(text(),'накопительным счетом')]",

/////////// Application ///////////
    setApplication() {
        I.click(this.productTabApplication)
    },
    inputDepositAmount(depositAmountInput) {
        I.clearField(this.depositAmountInput)
        I.fillField(this.depositAmountInput, depositAmountInput)
    },
    setCollateralCurrencyUSDT() {
        I.click(this.currencySelector)
        I.waitForVisible(this.currencyUsdt, 20)
        I.click(this.currencyUsdt)
    },
    submitInvestmentFundBtn() {
        I.waitForVisible(this.confirmOpeningBtn, 20)
        I.click(this.confirmOpeningBtn)
    },
    checkSuccessApplication() {
        I.waitForVisible(this.detailsBtn, 20)
        I.click(this.detailsBtn,)
    },
/////////// Manage ///////////
    setReplenishmen() {
        I.click(this.replenishmentBtn)
    },
    inputReplenishmentAmount(replenishmentAmountInput) {
        I.clearField(this.replenishmentAmountInput)
        I.fillField(this.replenishmentAmountInput, replenishmentAmountInput)
    },
    confirmReplenishmentBtn() {
        I.click(this.confirmWithdrawBtn)
    },
   checkReplenishment() {
        I.waitForVisible(this.successReplenishment, 20)
   },


    setWithdraw() {
        I.click(this.withdrawBtn)
    },
    inputWithdrawalAmount(withdrawalAmountInput) {
        I.clearField(this.withdrawalAmountInput)
        I.fillField(this.withdrawalAmountInput, withdrawalAmountInput)
    },
    confirmWithdraw() {
        I.click(this.confirmWithdrawBtn)
    },
    checkWithdraw() {
        I.waitForVisible(this.successWithdraw, 20)
    },
}