
const router = require("express").Router();
const memorialsController = require("../../controllers/memorialsController");

// Matches with "/api/memorials"
router
    .route("/")
    .get(memorialsController.findAll)


// Matches with "/api/memorials/:id"
router
    .route("/:id")
    .get(memorialsController.findById)
// .put(memorialsController.update)
// .delete(memorialsController.remove);

module.exports = router;
