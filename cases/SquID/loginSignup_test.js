/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('SquID')

Scenario.only('check_login', ({I, mainPage}) => {
  allure.feature('SquID')
  allure.story('User login')
    I.amOnPage('/')
    mainPage.login('x222202@yandex.ru', 'Newbie_228')
    mainPage.chekLogin()
  }).tag('SquID').tag('CI')

Scenario('check_signup', ({I, mainPage}) => {
  allure.feature('SquID')
  allure.story('User registration')
    I.amOnPage('/')
    mainPage.setNewAcc()
    mainPage.inputEmail('bollywood'+ Math.random() * 100 +'@squilla.io')
    mainPage.inputPasswords('gJB$B!kR8KrQ')
    mainPage.setPoliticsCheckBox()
    mainPage.submitRegistration()
    mainPage.chekSignup()
  }).tag('SquID').tag('CI')
