import { AddDataToTable, db } from "../db/sql.js";

export default function ContactosModels(data) {
  const { nombre, email, comentario, ip, fecha } = data;
  db.run(AddDataToTable(), [nombre, email, comentario, ip, fecha], (err) => {
    if (err) return console.log(err.message);
  });
}
