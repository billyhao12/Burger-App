const connection = require("./connection");

const orm = {
    selectAll: function() {
        const queryString = "SELECT * FROM burgers";
        connection.connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function() {
        const queryString = "INSERT INTO burgers SET burger_name = ?, devoured = ?";
        connection.connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(colToUpdate, valOfCol, colToUpdate2, valofCol2, colToFilter, filterColVal) {
        const queryString = "UPDATE burgers SET ?? = ?, ?? = ? WHERE ?? = ?";
        connection.connection.query(queryString, [colToUpdate, valOfCol, colToUpdate2, valofCol2, colToFilter, filterColVal], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;