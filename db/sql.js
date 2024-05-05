import sqlite3 from "sqlite3";

let sql;

//CONNECT DB
export const db = new sqlite3.Database(
  "./db/database.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.log(err.message);
  }
);

export const AddDataToTable = () => {
  return `INSERT INTO formUser (nombre, email, comentario, ip, fecha) 
  VALUES (?,?,?,?,?)`;
};

//CREATE TABLE

//INSERT DATA IN TABLE formUser

// export const create = () => {
//   return `CREATE TABLE formUser (id INTEGER PRIMARY KEY AUTOINCREMENT , nombre CHAR(100) NOT NULL, email CHAR(200) NOT NULL, comentario CHAR(300) NOT NULL, ip CHAR(100) NOT NULL, fecha CHAR(100) NOT NULL )`;
// };
