const { Pool } = require('pg')

const pool = new Pool({
    user:"postgres",
    password:"mamapapa2",
    host:"localhost",
    database:"todo",
    port:5432,
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

