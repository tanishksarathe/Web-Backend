const express = require('express')
const router = express.Router()

// middleware that is specific to this router

const auth = function (req,res,next) {
    console.log("Authentication kr rha hu");

    req.user = true;

    if(req.user) {
        next();
    }
    else{
        res.json({
            success : false,
            message : "not a valid user"
        })
    }

}

const isstudent = function (req,res,next) {
    console.log("IS student verify kr rha hu")

    req.student = false;

    if(req.student) {
        next();
    }
    else{
        res.json({
            success : false,
            message : "Success denied"
        })
    }
}

const isAdmin = function (req,res,next) {
    console.log("Admin hai ya nahi check kr rha tha");

    req.admin = true;

    if (req.admin) {
        next();
    }
    else {
         res.json({
            success : false,
            message : "Stop, phle admin banke aao"
        })
    }
}



// define the home page route

router.get('/student', auth, isstudent,(req,res)=>{
    console.log("Finally aa gya student route k andar");
    res.send("Students log welcome")
})

router.get('/admin', auth,isAdmin, (req,res) => {
    console.log("Aaa gya finally admin panel m ")
    res.send ("Admin ji welcome h aapka")
} )

module.exports = router

// likh liye middlewares alg se, i mean router level middlewares ab mount krne chlo main file m