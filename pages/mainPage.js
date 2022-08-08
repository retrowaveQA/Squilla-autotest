/* eslint-disable no-undef */

const { I } = inject()

module.exports = {
    // вход
    signinBtn: '#headerLogin',
    email: '#email',
    password: '#password',
    passwordConfirm: '#passwordConfirm',
    signinConfrim: '#loginActionBtn',
    breadCrumbs: "//h1[contains(text(),'Накопительные продукты')]",
    // рег
    newAccBtn: '#headerRegister',
    politicsCheckBox: "//body/div[@id='__nuxt']/div[@id='__layout']/div[@id='app']/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/div[1]/div[1]/div[1]",
    registrationConfrim: '#registerActionBtn',
    successRegistration: "//h2[contains(text(),'Добро пожаловать')]",
    // Login
    login(email, password) {
        I.waitForVisible(this.signinBtn, 20)
        I.click(this.signinBtn)
        I.waitForVisible(this.email, 20)
        I.fillField(this.email, email)
        I.fillField(this.password, password)
        I.click(this.signinConfrim)
    },
    chekLogin() {
        I.waitForVisible(this.breadCrumbs, 20)
        I.seeElement(this.breadCrumbs)
    },
    // Signup
    setNewAcc() {
        I.waitForVisible(this.newAccBtn, 20)
        I.click(this.newAccBtn)
    },
    inputEmail(email) {
        I.waitForVisible(this.email)
        I.fillField(this.email, email)
    },
    inputPasswords(password) {
        I.waitForVisible(this.password, 20)
        I.clearField(this.password, password)
        I.fillField(this.password, password)
        I.fillField(this.passwordConfirm, password)
    },
    setPoliticsCheckBox() {
        I.waitForVisible(this.politicsCheckBox, 20)
        //I.dontSeeCheckboxIsChecked('#registerActionBtn')
        I.click(this.politicsCheckBox)
    },
    submitRegistration() {
        I.waitForVisible(this.registrationConfrim, 20)
        I.click(this.registrationConfrim)
    },
    chekSignup() {
        I.waitForVisible(this.successRegistration, 20)
        I.seeElement(this.successRegistration)
    },
}
