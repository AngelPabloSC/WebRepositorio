const express = require("express"),
    router =express.Router(),
    song = require("../models/song_model");

router.use('/songs',song);

module.exports = router;

