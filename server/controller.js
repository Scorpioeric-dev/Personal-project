const bcrypt = require('bcryptjs')

module.exports = {
    : async (req,res) => {
        const db = req.app.get('db')
        const {email,username,password} = req.body

        const user = await db.find_email([email])
        if(user.length . 0) {
            return res.status(400).send({message:'Email in use'})
        }
        const salt = bcrypt.genSaltsync(10)
        const has = bcrypt.hashSync(password, salt)
        const newUser = aawait db.insert_user_info({username,email})
        db.insert_hash({hash,user_id:newUser[0].user_id})
        .then(() => {
            db.create_account([newUser[0].user_id])
            req.session.user = newUser[0]
            res.status(200)
            .send({
                message:'logged in'
                user: req.session.user,
                loggedIn:true
            })
            .catch(err => {
                res.status(500).send({message:'Failed to register'})
            })
        })



    }
}