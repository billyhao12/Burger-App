const express = require("express");
const router = express.Router();

// Import the model to use its database functions
const burger = require ("../models/burger");

router.get("/", (req, res) => {
    burger.all()
    res.render("index");
});

router.post("/api/burgers", (req, res) => {
    burger.create( req.body, (result) => {
        res.json()
    });
});

router.put("/api/burgers/:id", (req, res) => {

    burger.update( req.body, req.params.id, (result) => {
        res.end();
    });

});

module.exports = router;