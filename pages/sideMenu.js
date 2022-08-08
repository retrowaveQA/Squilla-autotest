/* eslint-disable no-undef */

const { I } = inject()

module.exports = {
  creditProductsDropdown: "//*[@id='menuSidebarNavigationDrawer']/div[1]/section/div[2]/div/div/div[1]",
  creditLine: '#credit_lineNavListItem',
  turboLoan: '#singleNavListItem',
  verefication: '#verificationNavMenuListItem',
  depositsSavingsAccounts: "#navFILDepositsSavingsAccounts",

  setVerefication() {
    I.waitForVisible(this.verefication, 20)
    I.click(this.verefication)
  },
  setCreditLine() {
    I.waitForVisible(this.creditProductsDropdown, 20)
    I.click(this.creditProductsDropdown)
    I.waitForVisible(this.creditLine, 20)
    I.click(this.creditLine)
  },
  setTurboLoan() {
    I.waitForVisible(this.creditProductsDropdown, 20)
    I.click(this.creditProductsDropdown)
    I.waitForVisible(this.turboLoan, 20)
    I.click(this.turboLoan)
  },

  setDepositsSavingsAccounts() {
    I.waitForVisible(this.depositsSavingsAccounts, 20)
    I.click(this.depositsSavingsAccounts)
  }
}
