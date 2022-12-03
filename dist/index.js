"use strict";
const { Oaza } = require("jp-zipcode-lookup");
const zip5Loader = require("../data/zip5.json").zip5.helloworks;
const zip7Loader = require("../data/zip7.json").zip7.helloworks;
const zip7LoaderOnlyThisHelloWorks = require("../data/zip7.json").zip7.onlythishelloworks;
class HelloWork {
    constructor(zipcode, Oaza) {
        this.address = Oaza.byZipcode(zipcode)[0];
        this.name = this.nameSearcher();
    }
    static byZipcode(zipcode) {
        return new HelloWork(zipcode, Oaza);
    }
    nameSearcher() {
        const name = [];
        const zip7LoaderKeys = Object.keys(zip7Loader);
        const zip5LoaderKeys = Object.keys(zip5Loader);
        const zip7LoaderOnlyThisHelloWorksKeys = Object.keys(zip7LoaderOnlyThisHelloWorks);
        for (const key of zip7LoaderOnlyThisHelloWorksKeys) {
            if (this.address.code in zip7LoaderOnlyThisHelloWorks[key]) {
                name.push(key);
            }
        }
        if (name.length === 0) {
            for (const key of zip7LoaderKeys) {
                if (this.address.code in zip7Loader[key]) {
                    name.push(key);
                }
            }
            for (const key of zip5LoaderKeys) {
                if (this.address.city.code in zip5Loader[key]) {
                    name.push(key);
                }
            }
        }
        return name;
    }
    getKeys(keys, name, data) {
        if (name.length !== 0) {
            for (const key of keys) {
                if (this.address.code in data[key]) {
                    name.push(key);
                }
            }
        }
        return;
    }
}
console.log(HelloWork.byZipcode("6550872"));
