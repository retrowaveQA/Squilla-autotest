/* eslint-disable no-undef */

const { I } = inject()

module.exports = {
  // шаг1
  url: 'http://loans.staging.dev.sqilla-lab.com/profile/verification',
  passVerificationBtn: '#passVerificationBtn',
  firstName: '#verificationFirstName input',
  lastName: '#verificationLastName input',
  middleName: '#verificationMiddleName input',
  dateBirth: '#verificationBirthDate input',
  phoneNumber: '#phone',
  genderM: "//span[contains(text(),'М')]",
  getСode: "//button[contains(text(),'Получить код')]",
  inputCodeSMS: '',
  confirmCodeBtn: "//button[contains(text(),'Подтвердить')]",
  stepTwo: 'finishStepBtn',
  // шаг2
  coutryDropdown: '#verificationCountrySelect',
  countryArg: "//div[contains(text(),'Аргентина')]",
  coutryInput: '#verificationCountrySelect input',
  documentTypeDropdown: '#verificationDocumentTypeSelect',
  docPasport: "//div[contains(text(),'Паспорт')]",
  countryDocumentDropdown: '#verificationDocumentCountrySelect',
  serialNumberDoc: '#verificationZipCodeField',
  nextStep3: '#finishStepBtn',
  // шаг3
  attachPhotoIdentityDocument: '#verificationPhotoIdFrontBtn',
  attachPhotoAdressDocument: '#verificationPhotoIdBackBtn',
  attachSelfiePhotoDocumen: '#verificationPhotoSelfieBtn',
  sendVerificationBtn: '#finishStepBtn',
  /// //шаг1
  openVerificationStatus() {
    I.amOnPage(this.url)
  },
  openVerificationForm() {
    I.waitForVisible(this.passVerificationBtn, 20)
    I.click(this.passVerificationBtn)
  },
  inputFirstName(name) {
    I.waitForVisible(this.firstName, 20)
    I.clearField(this.firstName)
    I.fillField(this.firstName, name)
  },
  inputLastName(lastName) {
    I.waitForVisible(this.lastName, 20)
    I.clearField(this.lastName)
    I.fillField(this.lastName, lastName)
  },
  inputMiddleName(middleName) {
    I.waitForVisible(this.middleName, 20)
    I.clearField(this.middleName)
    I.fillField(this.middleName, middleName)
  },
  inputDateBirth(dateBirth) {
    I.waitForVisible(this.dateBirth, 20)
    I.clearField(this.dateBirth)
    I.fillField(this.dateBirth, dateBirth)
  },
  inputPhoneNumber(phoneNumber) {
    I.waitForVisible(this.phoneNumber, 20)
    I.clearField(this.phoneNumber)
    I.fillField(this.phoneNumber, phoneNumber)
  },
  setGenderM() {
    I.waitForVisible(this.genderM, 20)
    I.click(this.genderM)
  },
  submitGetСode() {
    I.waitForVisible(this.getСode, 20)
    I.click(this.getСode)
  },
  inputCode(inputCodeSMS) {
    I.waitForVisible(this.inputCodeSMS, 20)
    I.fillField(this.inputCodeSMS, inputCodeSMS)
  },
  submitCodeBtn() {
    I.waitForVisible(this.confirmCodeBtn, 20)
    I.click(this.confirmCodeBtn)
  },
  goStepTwo() {
    I.waitForVisible(this.stepTwo, 20)
    I.click(this.stepTwo)
  },
  /// //шаг2
  setCountry() {
    I.waitForVisible(this.coutryDropdown, 20)
    I.click(this.countryArg)
  },
  inputIndex(index) {
    I.waitForVisible(this.serialNumberDoc)
    I.clearField(this.serialNumberDoc)
    I.fillField(this.serialNumberDoc, index)
  },
  setDocument() {
    I.waitForVisible(this.documentTypeDropdown, 20)
    I.click(this.docPasport)
  },
  setCountryDoc() {
    I.waitForVisible(this.countryDocumentDropdown, 20)
    I.click(this.countryArg)
  },
  goStepThree() {
    I.waitForVisible(this.nextStep3)
    I.click(this.nextStep3)
  },
}
