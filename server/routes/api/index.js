const router = require("express").Router();
const memorialRoutes = require("./memorials");

// Book routes
router.use("/memorials", memorialRoutes);

module.exports = router;

