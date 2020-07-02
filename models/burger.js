const orm = require("../config/orm");

const burger = {

    all() {
        orm.selectAll()
    },

    update() {
        orm.updateOne("burgers", newValues, targetId, cb);
    },

    create() {

    }

}

module.exports = burger;