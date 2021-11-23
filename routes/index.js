const express = require('express')
const Topup = require('../models/topup')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('pages/index')
})

router.get(('/fnp'), (req,res) => {
    res.render('pages/fnp')
})

router.get(('/promo'), (req,res) => {
    res.render('pages/promo')
})

router.get(('/profile'), (req,res) => {
    res.render('pages/profile')
})

router.get(('/faq'), (req,res) => {
    res.render('pages/faq')
})

router.get('/', (req,res) => {
    res.render('pages/index')
})

router.get(('/topup'), (req,res) => {
    res.render('pages/topup')
})

router.get(('/withdrawal'), (req,res) => {
    res.render('pages/withdrawal')
})

router.get(('/pembayaran'), (req,res) => {
    res.render('pages/pembayaran')
})

router.get(('/paylater'), (req,res) => {
    res.render('pages/paylater')
})

router.get(('/transfer'), (req,res) => {
    res.render('pages/transfer')
})

router.get(('/premium'), (req,res) => {
    res.render('pages/premium')
})

router.get(('/redeemcode'), (req,res) => {
    res.render('pages/redeemcode')
})

router.get(('/trf_rek'), (req,res) => {
    res.render('pages/trf_rek')
})

router.get(('/trf_bank'), (req,res) => {
    res.render('pages/trf_bank')
})

router.get(('/premiumform'), (req,res) => {
    res.render('pages/premiumform')
})

router.post('/topup', async (req,res) => {
    const jumlah_transaksi = req.body.inputsaldo;
    const jml_saldo = 0;
    jml_saldo += jumlah_transaksi;

    const TP = new Topup({
        jumlah_transaksi: jumlah_transaksi,
        jumlah_saldo: jml_saldo
    });
    await TP.save((err,res) => {
        if (err) console.log(err);
        else {
            console.log('Berhasil tersimpan');
        }
    })
    res.redirect('/');
})

module.exports = router;