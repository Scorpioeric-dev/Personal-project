require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING,SESSION_SECRET} = process.env


const app = express()

//endpoints





app.use(express.json())
app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie: {
        maxAge: 100* 60 * 60 * 24 * 10
    }
}))
massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
})
app.listen(SERVER_PORT,() => console.log(`Grinding on ${SERVER_PORT}`))