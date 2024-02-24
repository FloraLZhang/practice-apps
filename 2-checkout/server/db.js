
const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
    )
  )
  .catch((err) => console.log(err));

let get = () => {
  return db.queryAsync("SELECT * FROM responses")
    .then((result) => {
      return result[0];
    })
    .catch((err) => {
      console.log(err);
    })
}

let create = (response, callback) => {
  const query = `INSERT INTO responses(name, email, password, addressLine1, addressLine2, city, state, zipCode, phoneNumber, creditCardNumber, expiryDate, cvv, billingZipCode)
  VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  return db.queryAsync (query,[response.name, response.email, response.password, response.addressLine1, response.addressLine2, response.city, response.state, response.zipCode, response.phoneNumber, response.creditCardNumber, response.expiryDate, response.cvv, response.billingZipCode])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    })
}



module.exports = db;
module.exports.get = get;
module.exports.create = create;
