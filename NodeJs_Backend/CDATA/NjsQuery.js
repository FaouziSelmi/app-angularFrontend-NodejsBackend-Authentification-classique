const mysql=require('mysql');
const express= require('express');
var app=express();
const bodyparser=require('body-parser');
const session = require('express-session');
app.use(bodyparser.json());
let cors = require("cors"); //allow angular server connection
app.use(cors({origin: '*'}));
/********************************************** ****************************************/
var TesterConnection=mysql.createConnection({
    server:'localhost',
    user: 'root',
    password:'',
    database: 'crudNodejs'
});
//********* function test COnnection to data base mysql*******************************/
TesterConnection.connect((error) =>{
 if(!error){
 console.log('connection succeded');
 app.listen(3000,()=> console.log('express server running at port no: 3000 '));
 }
 else
 console.log('db connection failed  \n error:' + JSON.stringify(error, undefined,2));
});
 //*******get all data******************************************************************/
function getAllData(urlpath,sqlquery){
app.get(urlpath,(req,res)=>{
    TesterConnection.query(sqlquery,(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
  });
}
 //*******get all data emp/dir******************
 //************************************************/
  //************************************************/
var sess;
 function getAllDataFaozui(urlpath,sqlquery){
  app.get(urlpath,(req,res)=>{
    //sess=req.session;
      TesterConnection.query(sqlquery,[req.params.id],(err,rows,fields)=>{
          if(!err)
          res.send(rows);
          //console.log(sqlquery);
          else
          console.log(err);
      })
    });
  }
//*******get one record data******************************************************************/
function getOneRecordData(urlpath,sqlquery){
app.get(urlpath,(req,res)=>{
    TesterConnection.query(sqlquery,[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
  });
}
/***************Delete record data***********************************************************/
function deleteRecordData(urlpath,sqlquery){
app.delete(urlpath,(req,res)=>{
    TesterConnection.query(sqlquery,[req.params.id],(err,rows,fields)=>{
        if(!err)
     res.send('data deleted successfully');
   
        else
        console.log(err);
    })
  });
}

module.exports = {TesterConnection,getAllData, getOneRecordData, deleteRecordData, app, getAllDataFaozui };