const connection =require("../mysql/index")


module.exports={
      getall:(callback)=>{
            var sql="SELECT * FROM ART"
            connection.query(sql,(err,results)=>{
                  callback(err,results)
            })
      },
      add
}