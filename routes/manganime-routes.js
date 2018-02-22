const express = require("express");
const manganimeRouter = express.Router();

const manganimeController = require("../controllers/manganime-controller");

manganimeRouter.get("/", manganimeController.index);
// manganimeRouter.post("/", manganimeController.create);

// manganimeRouter.get("/:id", manganimeController.show);
// manganimeRouter.put("/:id", manganimeController.update);
// manganimeRouter.delete("/:id", manganimeController.destroy);

module.exports = manganimeRouter;
