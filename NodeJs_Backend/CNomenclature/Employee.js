var dbQuery=require ('../CDATA/NjsQuery.js');
console.log(dbQuery.TesterConnection.connect);
const dir=require('./Direction')
///****************************************** */
var urlpathAll='/employees';
var sqlqueryAll='select * from employee E \
inner join direction d \
where E.idDir=D.idDir';
dbQuery.getAllData(urlpathAll,sqlqueryAll)
///**********************Get Emp par diredtion********
//*************************
//************************************************ */
var urlpathAll='/employeesDirection/:id';
var sqlqueryAll='select * from employee E \
inner join direction d \
where E.idDir=D.idDir and D.idDir=?';
dbQuery.getAllDataFaozui(urlpathAll,sqlqueryAll )

/***************************************** */
var urlpathOne='/employees/:id';
var sqlqueryOne='select * from employee E \
inner join direction d \
where E.idDir=D.idDir and idEmp=?';
dbQuery.getOneRecordData(urlpathOne,sqlqueryOne)
/*********************************************** */
var urlpathDelete='/deleteEmployee/:id';
var sqlqueryDelete='delete from employee where idEmp=?';
dbQuery.deleteRecordData(urlpathDelete,sqlqueryDelete)
/*********************************************** */
var urlpath='/addEmployee'
dbQuery.app.post(urlpath, function(req, res, next) {
    sqlquery=`insert into employee(firstName,lastName,emailId,idDir) values
    ("${req.body.firstName}","${req.body.lastName}","${req.body.emailId}","${req.body.idDir}")`;
    dbQuery.TesterConnection.query(sqlquery, function(err, result) {
      if (err) throw err;
     res.send('data inserted successfully');
    });
  });
/************************************************************ */
var urlpath='/editEmployee/:id'
dbQuery.app.put(urlpath, function (req, res) {
    dbQuery.TesterConnection.query('UPDATE `employee` SET `firstName`=?,`lastName`=?,`emailId`=?,`idDir`=? where `idEmp`=?',
        [req.body.firstName,req.body.lastName, req.body.emailId,req.body.idDir, req.params.id], 
        function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify(results));
      });
    });