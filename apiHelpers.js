const fs = require("fs");
const path = require("path");
const data = require("./data.json");

function getAllData() {
    return data;
}

function getDataByID(id) {
    return data.find((d) => d.id === parseInt(id));
}

function getNextId() {
    let dataId = 1;
    const lastUser = data[data.length - 1];
    if (lastUser) dataId = lastUser.id + 1;

    return dataId;
}

function insertData(reqData) {
    data.push(reqData);
    saveData();
    return reqData;
}

function updateData(reqData) {
    const resData = Object.assign(
        data.find((d) => d.id === reqData.id),
        reqData
    );
    saveData();
    return resData;
}

function deleteData(dataObj) {
    const index = data.indexOf(dataObj);
    data.splice(index, 1);
    saveData();
    return dataObj;
}

function saveData() {
    fs.writeFile(path.join(__dirname, "data.json"), JSON.stringify(data, null, 4), (err) => {
        if (err) console.error(err);
    });
}

module.exports = {
    getAllData,
    getDataByID,
    getNextId,
    insertData,
    updateData,
    deleteData,
};
