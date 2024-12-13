// all the routes are defined in this specific file
// yaha routes provide kr diye ab load krvana pdega index.js m

const express = require('express')
const router = express.Router()

// define the home page route
// Request ki kahaniyan

router.get('/', (req,res) => {
    // res.sendFile('./dummy.html', {root : __filename});
    res.send("hello router's get here")
});

router.put('/items/:id', (req,res) => {
    res.send("Put request")
})

router.post('/items', (req,res) => {
    res.send("Post Request")
})

router.delete('/items/:id', (req,res) => {
    res.send("Delete Request")
})


module.exports = router