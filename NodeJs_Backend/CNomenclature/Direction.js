var dbQuery=require ('../CDATA/NjsQuery.js');
console.log(dbQuery.TesterConnection.connect);
///****************************************** */
var urlpathAll='/directions';
var sqlqueryAll='select * from direction';
dbQuery.getAllData(urlpathAll,sqlqueryAll)
/***************************************** */
var urlpathOne='/directions/:id';
var sqlqueryOne='select * from direction where idDir=?';
dbQuery.getOneRecordData(urlpathOne,sqlqueryOne)
/*********************************************** */
var urlpathDelete='/deletedirection/:id';
var sqlqueryDelete='delete from direction where idDir=?';
dbQuery.deleteRecordData(urlpathDelete,sqlqueryDelete)
/*********************************************** */
var urlpath='/addDirection'
dbQuery.app.post(urlpath, function(req, res, next) {
    sqlquery=`insert into direction(nomDir) values("${req.body.nomDir}")`;
    dbQuery.TesterConnection.query(sqlquery, function(err, result) {
      if (err) throw err;
     res.send('data inserted successfully');
    });
  });
/************************************************************ */
var urlpath='/editDirection/:id'
dbQuery.app.put(urlpath, function (req, res) {
    dbQuery.TesterConnection.query('UPDATE `Direction` SET `nomDir`=? where `idDir`=?',
        [req.body.nomDir, req.params.id], 
        function (error, results, fields) {
       if (error) throw error;
       res.send(JSON.stringify(results));
      });
    });