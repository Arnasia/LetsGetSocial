const router = require("express").Router();
// import your apis 
const apiRoutes = require ('./api');

router.use('/api', apiRoutes);
router.use((req, res) => {
    //In case of an Error 
    res.status(404).send("<h1> 404 Error <h1>");
});

module.exports = router;