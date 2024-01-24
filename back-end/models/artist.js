const connection = require("../mysql/index")


module.exports = {
      getall: (callback) => {
            var sql = "SELECT * FROM artist"
            connection.query(sql, (err, results) => {
                  callback(err, results)
            })
      },
      add: (data, callback) => {
            const sql = "INSERT INTO artist SET ?"
            connection.query(sql, [data], (err, results) => {
                  callback(err, results)
            })
      },
      update: (data, id, callback) => {
            const sql = "UPDATE artist SET `name`=?, `city`=?,`image`=? WHERE id=? "
            connection.query(sql, [data.name, data.city, data.image, id], (err, results) => {
                  callback(err, results);
            });
      },
      DELETE: (id, callback) => {
            const sql = "DELETE FROM artist WHERE id=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      }
}