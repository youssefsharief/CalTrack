
const mailer = require('../../services/mailer')


module.exports = async (req, res, next) => {
    try{
        await mailer.sendInvitation(req.body.email, req.body.url)
        return res.status(200).json({success: 'ok'})
    } catch(e) {
        return next(e)
    }
    
}

