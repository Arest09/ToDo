const express = require('express');
const path = require("path")
const listRoutes = require("./routes/list.routes")

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("static"))
app.set("view engine", "ejs");
app.set("views", "ejs");


app.use(listRoutes)


