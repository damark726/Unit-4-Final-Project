const express = require("express");
const manganimeController = require("../controllers/manganime-controller");
const manganimeRouter = express.Router();
//========================================================================================================================================
manganimeRouter.get("/", manganimeController.index);
manganimeRouter.get("/:id", manganimeController.show);
manganimeRouter.post("/", manganimeController.create);
manganimeRouter.get("/edit/:id", manganimeController.edit);
manganimeRouter.put("/:id", manganimeController.update);
manganimeRouter.delete("/:id", manganimeController.delete);
//========================================================================================================================================
module.exports = manganimeRouter;
