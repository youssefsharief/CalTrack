const router = require('express').Router()
const passport = require('passport')
const addRecord = require('./record/add-record.route')
const removeRecord = require('./record/remove-record.route')
const updateRecord = require('./record/update-record.route')
const validateUpdateRecord = require('./record/update-record.validate')
const validateAddRecord = require('./record/add-record.validate')
const getUser = require('./user/get-user.route')
const updateUserInfo = require('./user/update-user-info.route')
const removeUser = require('./user/remove-user.route')
const validateUpdateRole = require('./user/update-role.validate')
const validateUpdateInfo = require('./user/update-user-info.validate')
const updateUserRole = require('./user/update-role.route')
const getUsers = require('./user/get-users.route')
const inviteUser = require('./user/invite-user.route')
const validateInviteUser = require('./user/invite-user.validate')
const signup = require('./security/signup.route')
const login = require('./security/login.route')
const updateMyPassword = require('./security/update-my-password.route')
const validateLogin = require('./security/login.validate')
const validateSignup = require('./security/signup.validate')
const validateUpdateMyPassword = require('./security/update-my-password.validate')
const signupSecurely = require('./security/secure-signup/signup-secure.route')
const activateMyAccount = require('./security/secure-signup/activate-my-account.route')
const validateActivateMyAccount = require('./security/secure-signup/activate-my-account.validate')
const activateUserAdministratively = require('./security/secure-signup/activate-user-administratively.route')
const sendMeRecoveryCode = require('./security/reset-password/send-me-recovery-code.route')
const validateSendMeRecoveryCode = require('./security/reset-password/send-me-recovery-code.validate')
const updatePasswordByRecoveryCode = require('./security/reset-password/update-password-by-recovery-code.route')
const validateUpdatePasswordByRecoveryCode = require('./security/reset-password/update-password-by-recovery-code.validate')
const changeOtherUserPassword = require('./security/change-other-user-password.route')
const validatechangeOtherUserPassword = require('./security/change-other-user-password.validate')
const getUserRecords = require('./record/get-user-records.route')
const getUserRecord = require('./record/get-user-record.route')
const googleSignin = require('./security/social-login/google-signin.route')
const facebookSignin = require('./security/social-login/facebook-signin.route')
const connectFacebook = require('./security/social-login/connect-facebook.route')
const connectGoogle = require('./security/social-login/connect-google.route')
const connectLocalLogin = require('./security/connect-local-login.route')
const connectLocalLoginSecurely = require('./security/connect-local-login-secure.route')
const validateConnectLocalLogin = require('./security/connect-local-login.validate')
const disconnectFacebook = require('./security/social-login/disconnect-facebook.route')
const disconnectGoogle = require('./security/social-login/disconnect-google.route')
const disconnectLocalLogin = require('./security/disconnect-local-login.route')
const validateSocialLogin = require('./security/social-login/social-login.validate')
const ensureHavingAtleast2Accounts = require('./security/ensure-having-2-accounts.validate')
const getTodaysIntake = require('./record/get-todays-intake.route')
const { verifyUser } = require('core/authentication')
const Authorize = require('core/authorization')
const Recaptcha = require('express-recaptcha').Recaptcha;
const recaptcha = process.env.NODE_ENV === 'testing' ? new Recaptcha( process.env.captchaTestingSiteKey, process.env.captchaTestingSecretKey) : new Recaptcha( process.env.captchaSiteKey, process.env.captchaSecretKey)



require('core/passport')

router.post('/users/', recaptcha.middleware.verify, validateSignup, signup)
router.post('/users/secure', recaptcha.middleware.verify, validateSignup, signupSecurely)
router.post('/activation', validateActivateMyAccount, activateMyAccount)
router.patch('/activation/administration/:id', verifyUser, Authorize.allowAdminAndManager, activateUserAdministratively)

router.post('/users/login', validateLogin, login)
router.put('/password', verifyUser, validateUpdateMyPassword, updateMyPassword)
router.put('/users/:id/password', verifyUser, validatechangeOtherUserPassword, Authorize.allowAdminAndManager, changeOtherUserPassword)

router.post('/password_recovery_requests', validateSendMeRecoveryCode, sendMeRecoveryCode)
router.post('/users/recovery_code', validateUpdatePasswordByRecoveryCode, updatePasswordByRecoveryCode)

router.put('/users/:id/info', verifyUser, validateUpdateInfo, Authorize.allowSelfAdminAndManager, updateUserInfo)
router.delete('/users/:id', verifyUser, Authorize.allowAdminAndManager, removeUser)
router.get('/users/', verifyUser, Authorize.preventRegularUsers, getUsers)
router.get('/users/:id', verifyUser, Authorize.allowSelfAdminAndManager, getUser)
router.patch('/users/:id/role', verifyUser, validateUpdateRole, Authorize.allowAdminOnly, updateUserRole)
router.post('/users/invite', verifyUser, validateInviteUser, Authorize.allowAdminOnly, inviteUser)

router.get('/users/:id/meals', verifyUser, Authorize.allowSelfAndAdminOnly, getUserRecords)
router.get('/users/:id/meals/calories_today', verifyUser, Authorize.allowSelfAndAdminOnly, getTodaysIntake);
router.get('/users/:id/meals/:mealId', verifyUser, Authorize.allowSelfAndAdminOnly, getUserRecord);
router.post('/users/:id/meals', verifyUser, validateAddRecord, Authorize.allowSelfAndAdminOnly, addRecord)
router.delete('/users/:id/meals/:mealId', verifyUser, Authorize.allowSelfAndAdminOnly, removeRecord)
router.put('/users/:id/meals/:mealId', verifyUser, validateUpdateRecord, Authorize.allowSelfAndAdminOnly, updateRecord)

router.post('/oauth/facebook', passport.authenticate('facebookToken', { session: false }), validateSocialLogin, facebookSignin);
router.post('/oauth/google', passport.authenticate('googleToken', { session: false }), validateSocialLogin, googleSignin);
router.post('/connections/facebook', verifyUser,  passport.authenticate('facebookToken', { session: false }), validateSocialLogin, connectFacebook);
router.post('/connections/google', verifyUser,  passport.authenticate('googleToken', { session: false }), validateSocialLogin, connectGoogle);
router.post('/connections/local', verifyUser,  validateConnectLocalLogin, connectLocalLogin);
router.post('/connections/local/secure', verifyUser,  validateConnectLocalLogin, connectLocalLoginSecurely);
router.delete('/connections/facebook', verifyUser, ensureHavingAtleast2Accounts, disconnectFacebook);
router.delete('/connections/google', verifyUser, ensureHavingAtleast2Accounts, disconnectGoogle);
router.delete('/connections/local', verifyUser, ensureHavingAtleast2Accounts, disconnectLocalLogin);




module.exports = router