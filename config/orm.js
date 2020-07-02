const connection = require("./connection");

const orm = {
    selectAll(columns, tableName) {
        const queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [columns, tableName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne() {
        const queryString = "INSERT INTO burgers SET burger_name = ?, devoured = ?";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne(tableName, newValue, targetId, cb) {
        coneection.query("UPDATE ?? SET ? WHERE id = ?", [tableName, newValue, targetId], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    }

    // updateOne(colToUpdate, valOfCol, colToUpdate2, valofCol2, colToFilter, filterColVal) {
    //     const queryString = "UPDATE burgers SET ?? = ?, ?? = ? WHERE ?? = ?";
    //     connection.query(queryString, [colToUpdate, valOfCol, colToUpdate2, valofCol2, colToFilter, filterColVal], function(err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // }
}

module.exports = orm;