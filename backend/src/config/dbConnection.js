const mongoose = require('mongoose');
const {DB_HOST} = require('./credentials')
// const db_host = process.env.DB_HOST || 'mongodb://localhost:27017/Books-management';
mongoose.connect( DB_HOST, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true,
    useFindAndModify : false
}).then(()=>{
    console.log('connected to mongodb databse')
}).catch((e) =>{
    console.log('Error occured during connectionn ...... ',e)
})
