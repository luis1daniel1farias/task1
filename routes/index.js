import { Router } from "express";
import ContactosController from "../controllers/ContactosController.js";
let router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("curriculum", { title: "CV - Luis Farias" });
});

router.post("/sendData", function (req, res, next) {
  const { body, ip } = req;
  const data = {
    body,
    ip,
  };
  console.log(data);
  ContactosController(data);
  res.redirect("/");
});

export default router;
