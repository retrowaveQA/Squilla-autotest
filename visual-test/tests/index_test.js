/* eslint-disable no-undef */
const allure = codeceptjs.container.plugins('allure');
Feature('screenshot index test')

Scenario('screenshot index test', ({ I, mainPage }) => {
 I.amOnPage('/')
 I.saveScreenshot("index_page.png", false);
 I.seeVisualDiff("index_page.png", {tolerance: 2, prepareBaseImage: false});

})