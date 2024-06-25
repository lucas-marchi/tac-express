var express = require('express');
var router = express.Router();
const Event = require('../model/Event');
const isAuthorized = require('../middleware/isAuthorized');

router.get("/", [isAuthorized], async function (req, res) {
    return await res.json(Event.find());
});

router.get("/:id", isAuthorized, async (req, res) => {
    const { id } = req.params;

    const result = await Event.findById(id);
    return result
        ? res.json(result)
        : res.status(404).send();
});


router.post("/", isAuthorized, async (req, res) => {
    const json = req.body;

    const event = new Event(json);

    const hasErrors = Event.validateSync();

    return hasErrors
        ? res.status(400).json(hasErrors)
        : res.status(201).json(await event.save());

});