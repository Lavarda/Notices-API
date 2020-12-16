const express = require('express')
const routes = express.Router();

routes.get('/login/teste', (req, res) => {
    console.log("OK")

    return res.status(200).json({
        message: "Ok",
    })
})

module.exports = routes