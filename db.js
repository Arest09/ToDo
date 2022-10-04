require('dotenv').config();

const { Pool } = require('pg')

const devCongif = { user:process.env.USER,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    database:process.env.DATABASE,
    port:process.env.PORT}

const pool = new Pool({
    connectionString:'postgres://isantzafeopnzv:75a475b41f3a283e19907517e3f36ffcee9baccc88f1f6ae086a14965a32c622@ec2-99-81-68-240.eu-west-1.compute.amazonaws.com:5432/dbqari89f7dalq',
    ssl: {
        rejectUnauthorized: false
    }
})


pool.connect();


pool.query(`select * from list`,(err,res)=>{
    if(!err){
        console.log('connected to DB')
    }
    else{
        console.log(err.message)
    }
})
module.exports = pool;

