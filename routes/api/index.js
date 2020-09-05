const router = require("express").Router();
const memorialRoutes = require("./memorials");

// Memorial routes
router.use("/memorials", memorialRoutes);

module.exports = router;
