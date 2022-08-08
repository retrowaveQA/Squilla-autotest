/* eslint-disable no-undef */

const { I } = inject()

module.exports = {
  userAvatar: '#headerUserAvatarBtn',
  avatarUpload: '#avatar-picker',

  openUserAccount() {
    I.waitForVisible(this.userAvatar, 20)
    I.click(this.userAvatar)
  },
  attachAvatar() {
    I.waitForVisible(this.avatarUpload, 20)
    I.attachFile("//button[contains(@id,'avatar-picker')]//i", 'testImage.jpg')
  },
}
