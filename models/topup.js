const mongoose = require('mongoose')

const topupSchema = mongoose.Schema({
    jumlah_transaksi: {
        type: Number,
        required: true
    },
    jumlah_saldo: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Topup', topupSchema, 'topup')