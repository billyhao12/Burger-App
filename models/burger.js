const orm = require("../config/orm");

const burger = {

    all(columns, cb) {
        orm.selectAll(columns, "burgers", cb);
    },

    create(data, cb) {
        orm.insertOne("burgers", data, cb);
    },

    update(newValues, targetId, cb) {
        orm.updateOne("burgers", newValues, targetId, cb);
    },

    delete(targetId, cb) {
        orm.deleteOne("burgers", targetId, cb);
    }

}

module.exports = burger;