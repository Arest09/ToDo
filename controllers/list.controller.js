
const db = require('../db')
const filePath = require('../helpers/helper')

const createItem = async(req,res)=>{
    const {name} = req.body;
     await db.query(`insert into list (name) values ('${name}') `)
     res.redirect("/")
 
}

const getItem = async(req,res)=>{
    const {rows} = await db.query("SELECT * FROM list ORDER BY id;")
    const posts = rows;
    res.render(filePath("index.ejs"),{posts})
}

const deleteItem = async(req,res)=>{
    const id = req.params.id;
    try {
        await db.query(`DELETE FROM list WHERE id=${id}`)
        res.sendStatus(200);
    } catch (error) {
       
        (error)
    }
   
}

const changeItem = async(req,res)=>{
    const id = req.params.id;
    const {name} = req.body; 
    try {
        await db.query(`UPDATE list SET name = '${name}' where id ='${id}'`)
        res.sendStatus(200);
    } catch (error) {
       console.log(error)
    }
   
}


const checkItem = async(req,res)=>{
   
    const id = req.params.id;
    const {checked} = req.body;
    console.log(checked)

    try {
        await db.query(`UPDATE list SET checked = '${checked}' where id ='${id}'`)
        res.sendStatus(200);
    } catch (error) {
       console.log(error)
    }
}

const important = async( req,res)=>{
  try {
  const {rows} = await db.query(`select name from list where checked = 'true'`)
  const posts = rows;
  res.render(filePath("important.ejs"),{posts})

  } catch (error) {
    console.log(error)
  }  
}

const isDone = async( req,res)=>{
    const id = req.params.id;
    const {done} = req.body;
   
    try {
         await db.query(`UPDATE list SET done = '${done}' where id ='${id}'`) 
         res.sendStatus(200);
    } catch (error) {
       console.log(error)
    }
}
 
module.exports ={
createItem,
getItem,
deleteItem,
changeItem,
checkItem,
important,
isDone
}

