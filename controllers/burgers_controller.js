const express = require("express");
const router = express.Router();

// Import the model to use its database functions
const Burger = require("../models/burger");

router.get("/", (req, res) => {

    Burger.all("id", "burger_name", "devoured", (results) => {
        res.render("index", {
            burgers: results
        });
    });
    
});

router.post("/api/burgers", (req, res) => {
    
    Burger.create(req.body, (result) => {
        res.json({ id: result.insertId });
    });

});

router.put("/api/burgers/:id", (req, res) => {

    Burger.update(req.body, req.params.id, (result) => {
        res.end();
    });

});

router.delete("/api/burgers/:id", (req, res) => {

    Burger.delete(req.params.id, (result) => {
        res.end();
    });

});

module.exports = router;