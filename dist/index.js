"use strict";
const { Oaza } = require("jp-zipcode-lookup");
const zip7Data = require("../data/zip7.json");
const cityData = require("../data/city.json");
const oaza = Oaza.byZipcode("6511321")[0];
const zip7HelloWorks = Object.keys(zip7Data["zip7"]);
const cityHelloWorks = Object.keys(cityData["city"]);
const yourHelloWork = [];
for (const zip7HelloWork of zip7HelloWorks) {
    if (oaza.code in zip7Data["zip7"][zip7HelloWork]) {
        yourHelloWork.push(zip7HelloWork);
    }
}
if (yourHelloWork.length === 0) {
    for (const cityHelloWork of cityHelloWorks) {
        if (oaza.city.code in cityData["city"][cityHelloWork]) {
            yourHelloWork.push(cityHelloWork);
        }
    }
}
console.log(yourHelloWork);
