const connection = require("./connection");

const orm = {
    selectAll(id, burgerName, devoured, tableName, cb) {
        connection.query("SELECT ??, ??, ?? FROM ??", [id, burgerName, devoured, tableName], (err, results) => {
            if(err) throw err;
            cb(results);
        });
    },

    insertOne(tableName, values, cb) {
        connection.query("INSERT INTO ?? SET ?", [tableName, values], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },

    updateOne(tableName, newValues, targetId, cb) {
        connection.query("UPDATE ?? SET ? WHERE id = ?", [tableName, newValues, targetId], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },

    deleteOne(tableName, targetId, cb) {
        connection.query("DELETE FROM ?? WHERE id = ?", [tableName, targetId], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    }

}

module.exports = orm;