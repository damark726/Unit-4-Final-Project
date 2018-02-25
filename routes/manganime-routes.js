const express = require("express");
const manganimeRouter = express.Router();
const manganimeController = require("../controllers/manganime-controller");

manganimeRouter.get("/", manganimeController.index);
manganimeRouter.get("/:id", manganimeController.show);
// manganimeRouter.get('/new', manganimeController.new);
manganimeRouter.post('/', manganimeController.create);
manganimeRouter.get('/edit/:id', manganimeController.edit);
manganimeRouter.put('/:id', manganimeController.update);
manganimeRouter.delete("/:id", manganimeController.delete);

module.exports = manganimeRouter;
