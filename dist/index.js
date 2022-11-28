"use strict";
const { Oaza } = require("jp-zipcode-lookup");
const zip7Data = require("../data/zip7.json");
const cityData = require("../data/city.json");
const bothData = require("../data/both.json");
const oaza = Oaza.byZipcode("0140205")[0];
const zip7HelloWorks = Object.keys(zip7Data["zip7"]);
const bothHelloWorks = Object.keys(bothData["both"]);
const cityHelloWorks = Object.keys(cityData["city"]);
const yourHelloWork = [];
for (const zip7HelloWork of zip7HelloWorks) {
    if (oaza.code in zip7Data["zip7"][zip7HelloWork]) {
        yourHelloWork.push(zip7HelloWork);
    }
}
if (yourHelloWork.length === 0) {
    for (const bothHelloWork of bothHelloWorks) {
        if (oaza.code in bothData["both"][bothHelloWork]) {
            yourHelloWork.push(bothHelloWork);
        }
    }
    for (const cityHelloWork of cityHelloWorks) {
        if (oaza.city.code in cityData["city"][cityHelloWork]) {
            yourHelloWork.push(cityHelloWork);
        }
    }
}
console.log(yourHelloWork);
