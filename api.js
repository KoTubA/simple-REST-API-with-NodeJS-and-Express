const schema = require("./schemaValidation");
const helpers = require("./apiHelpers");
const { checkSchema, validationResult } = require("express-validator");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(helpers.getAllData());
});

router.get("/:id", (req, res) => {
    const dataObj = helpers.getDataByID(req.params.id);
    if (!dataObj) return res.status(404).send("The data with the given ID was not found.");

    res.json(dataObj);
});

router.post("/", checkSchema(schema.schemaData), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send("The given data is incorrect.");

    req.body = Object.assign({ id: helpers.getNextId() }, req.body);
    const resData = helpers.insertData(req.body);
    res.json(resData);
});

router.put("/:id", checkSchema(schema.schemaUpdateData), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send("The given data is incorrect.");

    const dataObj = helpers.getDataByID(req.params.id);
    if (!dataObj) return res.status(404).send("The data with the given ID was not found.");

    req.body.id = dataObj.id;
    const resData = helpers.updateData(req.body);
    res.json(resData);
});

router.delete("/:id", (req, res) => {
    const dataObj = helpers.getDataByID(req.params.id);
    if (!dataObj) return res.status(404).send("The data with the given ID was not found.");

    const resData = helpers.deleteData(dataObj);
    res.json(resData);
});

module.exports = router;
