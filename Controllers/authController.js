
// const jwt = require('jsonwebtoken')
import jwt from "jsonwebtoken"
// import User  from '../models/user.model.js'
import User from "../models/user.model.js"
export const register = async (req, res) => {
    console.log(req.body, 'line15')
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'Ok' })
    } catch (err) {
        res.json({ statue: 'error', error: err })
    }
}


export const login = async (req, res) => {
    try {
        console.log("line no 35", req.body)
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })

        console.log("line no 41", user)
        if (user) {

            const token = jwt.sign({
                name: user.name,
                email: user.email
            }, 'secret123')

            console.log(token, "line42")

            return res.json({ status: 'Ok', user: token })
        }
        else if (!user) {
            res.send("user not found")
        }
    }
    catch (error) {
        console.log(error)
        return res.json({ status: error, user: false })

    }
}

// app.post('/api/signup', async (req, res) => {
//     console.log(req.body, 'line15')
//     try {
//         await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password,
//         })
//         res.json({ status: 'Ok' })
//     } catch (err) {
//         res.json({ statue: 'error', error: err })
//     }
// })


// app.post('/api/login', async (req, res) => {
//     try {
//         console.log("line no 35", req.body)
//         const user = await User.findOne({
//             email: req.body.email,
//             password: req.body.password,
//         })

//         console.log("line no 41", user)
//         if (user) {

//             const token = jwt.sign({
//                 name: user.name,
//                 email: user.email
//             }, 'secret123')

//             console.log(token, "line42")

//             return res.json({ status: 'Ok', user: token })
//         }
//         else if (!user) {
//             res.send("user not found")
//         }
//     }
//     catch (error) {
//         console.log(error)
//         return res.json({ status: error, user: false })

//     }

// })