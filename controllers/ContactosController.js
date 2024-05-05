import { date, z } from "zod";
import ContactosModels from "../models/ContactosModels.js";

//>ContactosController : add ==> http y enviar datos, validar datos del formulario antes de guardarlos, llamar a ContactosModel, redireccionar al usuatio a una pagina de confirmacion o mostrar un mensaje de exito.

//add TODO

//redireccionar

//call contactModel

const schemaFormData = z.object({
  nombre: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  comentario: z.string(),
  ip: z.string(),
  date: z.string(),
});

function validate(nombre, email, comentario, ip, date) {
  return schemaFormData.safeParse({
    nombre: nombre,
    email: email,
    comentario: comentario,
    ip: ip,
    date: date,
  });
}

function getDateTime() {
  const time = Date.now();
  let today = new Date(time);
  today = today.toLocaleDateString();
  return today;
}

export default function ContactosController(data) {
  const { nombre, email, comentario } = data.body;
  const ip = data.ip;
  const parsedData = { nombre, email, comentario, ip, fecha: getDateTime() };

  //validar los datos (zod)
  const validatedData = validate(nombre, email, comentario, ip, getDateTime());
  if (validatedData.success.valueOf()) {
    ContactosModels(parsedData);
  }
}
