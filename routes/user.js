const express = require('express')
const User = require('../models/user')
const router = express.Router();

router.get('/signin', async (req,res) => {
    res.render('pages/signin')
})

router.get('/register', (req,res) => {
    res.render('pages/register')
})

router.get('/logout', (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/');
})

router.post('/login', async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    accounts =  await User.find();
    await accounts.forEach((account) => {
        if (email == account.email) {
            if (password == account.password) {
                req.session.isLoggedIn = true;
                return res.redirect('/');
        }
        else {
            res.render('pages/signin', {error: 'Wrong Password!'})
            }
        }
    })
    res.render('pages/signin', {error: 'No email found!'})
})

router.post('/register', async (req, res) => {
    const name = req.body.name;
    const norek = req.body.norek;
    const nohp = req.body.nohp;
    const email = req.body.email;
    const password = req.body.password;
    const password_ = req.body.password_;

    accounts =  await User.find();
    //cek apakah email terdaftar
    await accounts.forEach((account) => {
        if (email == account.email) {
            res.render('pages/register', {error: 'Email sudah terdaftar!'})
        }
    })
    if (password != password_) {
        res.render('pages/register', {error: 'Password harus sama!'})
    }
    else {
        const user = new User({
            name: name,
            norek: norek,
            nohp: nohp,
            email: email,
            password: password
        });
        await user.save((err, res) => {
            if (err) console.error(err);
            else {
                console.log('Berhasil terdaftar');
            }
        })
        req.session.isLoggedIn = true;
        res.redirect('/');
    }
})


module.exports = router;