const express = require("express");
const Class = require("..//models/class");
const router = express.Router();


router.post("/create", async (request, response) => {
    console.log("REQUEST THE CLIENTT----", request.body);
    const newClass = new Class(request.body);
    await newClass.save();

    response.status(200).json({ code: "OK", message: "Todo Muy bien", info: "OK", data: newClass });
});
//list(get)
router.get("/list", async (request, response) => {

    const ListClass = await Class.find();


    response.status(200).json({ code: "OK", message: "Todo Muy bien", info: "OK", data: ListClass });
});
//getONlifind
router.post("/getonli", async (request, response) => {
    console.log("REQUEST THE CLIENTT----", request.body.id);
    const newClass = await Class.findOne({ _id: request.body.id })


    response.status(200).json({ code: "OK", message: "Todo Muy bien", info: "OK", data: newClass });
});

module.exports = router;