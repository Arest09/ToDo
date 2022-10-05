require('dotenv').config();

const { Pool } = require('pg')

const devCongif = { user:process.env.USER,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    database:process.env.DATABASE,
    port:process.env.PORT}

const pool = new Pool(
    devCongif, 
  
    
)


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

