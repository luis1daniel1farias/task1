import { Router } from "express";
import ContactosController from "../controllers/ContactosController.js";
let router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("curriculum", { title: "CV - Luis Farias" });
});

router.post("/sendData", function (req, res, next) {
  const { body } = req;
  const ip = req.header("x-forwarded-for");
  const data = {
    body,
    ip,
  };
  ContactosController(data);
  res.redirect("/");
});

export default router;
