"use strict";
const { Oaza } = require("jp-zipcode-lookup");
// type NameKanaPair = [string, string];
// type CityMaster = { [code: string]: NameKanaPair };
const zip5Loader = require("../data/zip5.json").zip5.helloworks;
const zip7Loader = require("../data/zip7.json").zip7.helloworks;
const zip7LoaderOnlyThisHelloWorks = require("../data/zip7.json").zip7.onlythishelloworks;
class HelloWork {
    constructor(zipcode, Oaza) {
        this.address = Oaza.byZipcode(zipcode)[0];
        this.name = [];
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
        this.name = name;
    }
    static byZipcode(zipcode) {
        const content = new HelloWork(zipcode, Oaza);
        content.nameSearcher();
        return content;
    }
}
console.log(HelloWork.byZipcode(5630058));
