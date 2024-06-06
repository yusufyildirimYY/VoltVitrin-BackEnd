const sqlite3 = require("sqlite3").verbose();
let sql;

// //Connecting to database
const db = new sqlite3.Database(
  "./Database/Cars.db",
  // "./Cars.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to Database");
    }
  }
);

// //Creating table
// sql =
//   "CREATE TABLE Cars(id INTEGER PRIMARY KEY,Brand,Model,Price INTEGER,Seat INTEGER,Drive,Cargo INTEGER,Top_Speed INTEGER,Range INTEGER,Acceleration,ChargePower,ChargeSpeed,FastChargePower,FastChargeSpeed)";
// db.run(sql);

//Insert table
// sql =
//   "INSERT INTO cars(Brand,Model,Price,Seat,Drive,Cargo,Top_Speed,Range,Acceleration,ChargePower,ChargeSpeed,FastChargePower,FastChargeSpeed) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
// db.run(
//   sql,
//   [
//     "Audi",
//     "SQ8 e-tron",
//     90995,
//     5,
//     "All Wheel Drive",
//     630 /*litre*/,
//     210 /* KMH */,
//     471 /* KM YE KADAR */,
//     "4.5" /* 0-100 */,
//     "11 kW AC",
//     "40 km/h",
//     "168 kW DC",
//     "570 km/h",
//   ],
//   (err) => {
//     if (err) throw err;
//   }
// );

//Selecting table
const readItems = (callback) => {
  const sql = "SELECT * FROM cars";
  db.all(sql, [], callback);
};
const readBrands = (callback) => {
  const sql = "SELECT DISTINCT brand, BrandLogo FROM cars";
  db.all(sql, [], callback);
};
module.exports = { readItems, readBrands };

// sql = "SELECT * FROM cars";
// db.all(sql, [], (err, rows) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(rows);
//   }
// });

//Alter table
// sql = "ALTER TABLE Cars ADD ModelImage4";
// db.run(sql);

// //Deleting table
// sql = "DROP TABLE cars";
// db.run(sql);

// // //Drop Column
// sql = "ALTER TABLE Cars DROP COLUMN Body";
// db.run(sql);

// Update Row
sql = "UPDATE Cars SET Model='Kona Electric' WHERE Model='Kona Electric '";
db.run(sql);

//Closing database
// db.close(() => {
//   console.log("Database closed");
// });
