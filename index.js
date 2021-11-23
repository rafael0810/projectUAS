const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')

const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: 'som3_secre3t_keys',
    cookie: {}
}))

mongoose.connect(('mongodb+srv://oggyno:renaldy21@cluster0.ync3b.mongodb.net/casi?retryWrites=true&w=majority')
, (err, res) => {
    if (err){
        console.error(err);
    }
    else {
        console.log('Database terhubung')
    }
})

app.use((req,res,next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn;
    next();
})

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

app.use('/', indexRouter);
app.use('/user', userRouter);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server sudah berjalan di port 3000')
})