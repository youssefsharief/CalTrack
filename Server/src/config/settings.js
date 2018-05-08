console.log(process.env.CAPTCHA_DISABLED)

module.exports = {
    isCaptchaEnabled: process.env.CAPTCHA_DISABLED ? false : true
}