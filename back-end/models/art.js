const connection = require("../mysql/index")


module.exports = {
      getall: (callback) => {
            var sql = "SELECT * FROM art"
            connection.query(sql, (err, results) => {
                  callback(err, results)
            })
      },
      add: (data, callback) => {
            const sql = "INSERT INTO art SET ?"
            connection.query(sql, [data], (err, results) => {
                  callback(err, results)
            })
      },
      update: (data, id, callback) => {
            const sql = "UPDATE art SET `name`=?, `artistname`=?,`image`=? WHERE id=? "
            connection.query(sql, [data.name, data.artistname, data.image, id], (err, results) => {
                  callback(err, results);
            });
      },
      DELETE: (id, callback) => {
            const sql = "DELETE FROM art WHERE id=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      }
}