const sqlServer=require('mssql');
const express= require('express');
var app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
/********************************************** ****************************************/
var config={
    server:'srv-sgbd',
    user: 'ANCF',
    password:'ancf',
    database: 'ANCF',
    options: {
        "enableArithAbort": true,
        "encrypt":false
       // "trustedConnection": true
    }
};
//********* function test COnnection to data base mysql*******************************/
sqlServer.connect(config, function (err) {
 if(!err){
 console.log('connection succeded');
app.listen(3000,()=> console.log('express server running at port no: 3000 '));
 }
 else
 console.log('db connection failed  \n error:' + JSON.stringify(err, undefined,2));
});
 //*******get all data******************************************************************/
 app.get('/sqlserver',(req,res)=>{
    sqlServer.query('select * from dbo.employee',(err,recordset)=>{
        if(!err)
        res.send(recordset.recordset);
        else
        console.log(err);
    })
  });