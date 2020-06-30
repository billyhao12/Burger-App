const orm = require("../config/orm");
const connection = require("../config/connection");

const burger = {

    all: function(cb) {
        connection.connect()
        .then( () => {
            orm.selectAll()
        })
        .catch( err => console.log(err) )
        .finally( () => connection.close() );
    }

}

module.exports = burger;