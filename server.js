const express = require("express");
const burgerRoutes = require("./controllers/burgers_controller");
const exphbs = require("express-handlebars");

// Create the server
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Use the public directory to serve static files
app.use(express.static("public"));

// Add data processing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Include routes
app.use(burgerRoutes);

// Open the listener to begin listening to requests
app.listen( PORT, () => {
    console.log( `Listening on PORT: ${PORT}` );
});