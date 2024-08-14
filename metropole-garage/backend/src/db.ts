import mysql from "mysql2/promise";

export const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "32129894",
  database: "metropole_garage",
});
