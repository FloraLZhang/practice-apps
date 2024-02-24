
require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);
app.use(express.json());

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));

app.post('/responses', (req, res) =>{
  db.create(req.body)
    .then(() => res.sendStatus(201))
    .catch((err)=>{
      console.log(err);
      res.sendStatus(500);
    })
})
app.get('/responses', (req, res) => {
  db.get()
  .then(responses => {
    res.send(responses)
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
