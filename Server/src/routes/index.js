const router = require('express').Router()
const passport = require('passport')

const addRecord = require('./records/add-record.route')
const removeRecord = require('./records/remove-record.route')
const updateRecord = require('./records/update-record.route')
const validateUpdateRecord = require('./records/update-record.validate')
const validateAddRecord = require('./records/add-record.validate')
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


const getUserRecords = require('./records/get-user-records.route')

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


const { verifyUser } = require('core/authentication')
const Authorize = require('core/authorization')
require('core/passport')

router.post('/users/', validateSignup, signup)
router.post('/users/secure', validateSignup, signupSecurely)
router.post('/activation', validateActivateMyAccount, activateMyAccount)

router.patch('/activation/administration/:id', verifyUser, Authorize.allowAdminAndManager, activateUserAdministratively)

router.post('/users/login', validateLogin, login)
router.post('/password_recovery_requests', validateSendMeRecoveryCode, sendMeRecoveryCode)
router.put('/password', verifyUser, validateUpdateMyPassword, updateMyPassword)
router.put('/users/:id/password', verifyUser, validatechangeOtherUserPassword, Authorize.allowAdminAndManager, changeOtherUserPassword)



router.post('/users/recovery_code', validateUpdatePasswordByRecoveryCode, updatePasswordByRecoveryCode)

router.put('/users/:id/info', verifyUser, validateUpdateInfo, Authorize.allowSelfAdminAndManager, updateUserInfo)
router.delete('/users/:id', verifyUser, Authorize.allowAdminAndManager, removeUser)
router.get('/users/', verifyUser, Authorize.preventRegularUsers, getUsers)
router.get('/users/:id', verifyUser, Authorize.allowSelfAndAdminOnly, getUser)

router.get('/users/:id/meals', verifyUser, Authorize.allowSelfAndAdminOnly, getUserRecords)
router.post('/users/:id/meals', verifyUser, validateAddRecord, Authorize.allowSelfAndAdminOnly, addRecord)
router.delete('/users/:id/meals/:mealId', verifyUser, Authorize.allowSelfAndAdminOnly, removeRecord)
router.put('/users/:id/meals/:mealId', verifyUser, validateUpdateRecord, Authorize.allowSelfAndAdminOnly, updateRecord)

router.patch('/users/:id/role', verifyUser, validateUpdateRole, Authorize.allowAdminOnly, updateUserRole)

router.post('/users/invite', verifyUser, validateInviteUser, Authorize.allowAdminOnly, inviteUser)



router.post('/oauth/facebook', passport.authenticate('facebookToken', { session: false }), validateSocialLogin, facebookSignin);
router.post('/oauth/google', passport.authenticate('googleToken', { session: false }), validateSocialLogin, googleSignin);

router.post('/connect/facebook', verifyUser, passport.authenticate('facebookToken', { session: false }), validateSocialLogin, connectFacebook);
router.post('/connect/google', verifyUser, passport.authenticate('googleToken', { session: false }), validateSocialLogin, connectGoogle);
router.post('/connect/local', verifyUser, validateConnectLocalLogin, connectLocalLogin);
router.post('/connect/local/secure', verifyUser, validateConnectLocalLogin, connectLocalLoginSecurely);

router.post('/disconnect/facebook', verifyUser, ensureHavingAtleast2Accounts, disconnectFacebook);
router.post('/disconnect/google', verifyUser, ensureHavingAtleast2Accounts, disconnectGoogle);
router.post('/disconnect/local', verifyUser, ensureHavingAtleast2Accounts, disconnectLocalLogin);

module.exports = router