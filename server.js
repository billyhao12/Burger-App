const express = require("express");
const exphbs = require("express-handlebars");
const burgerRoutes = require("./controllers/burgers_controller");

// Create the server
const app = express();

// Define the port
const PORT = process.env.PORT || 8080;

// Use the public directory to serve static files
app.use(express.static("public"));

// Add data processing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Include routes
app.use(burgerRoutes);

// Setting up the engine for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT).on('error', (err) => console.log(err));

// Open the listener to begin listening to requests
// app.listen( PORT, () => {
//     console.log( `Listening on PORT: ${PORT}` );
// });