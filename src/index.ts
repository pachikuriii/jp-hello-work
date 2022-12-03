const { Oaza } = require("jp-zipcode-lookup");

type Pref = {
  name: string;
  code: string;
  kana: string;
};

type City = {
  name: string;
  code: string;
  kana: string;
  pref: Pref;
};

type Address = {
  name: string;
  code: string;
  pref: Pref;
  city: City;
};

type PostalMaster = { [zip: string]: Array<string> };
const zip5Loader: PostalMaster = require("../data/zip5.json").zip5.helloworks;
const zip7Loader: PostalMaster = require("../data/zip7.json").zip7.helloworks;
const zip7LoaderOnlyThisHelloWorks: PostalMaster =
  require("../data/zip7.json").zip7.onlythishelloworks;

class HelloWork {
  address: Address;
  name: Array<string>;

  private constructor(zipcode: string | number, Oaza: any) {
    this.address = Oaza.byZipcode(zipcode)[0];
    this.name = this.nameSearcher();
  }

  static byZipcode(zipcode: string) {
    return new HelloWork(zipcode, Oaza);
  }

  private nameSearcher(): Array<string> {
    const name: Array<string> = [];
    const zip7LoaderKeys = Object.keys(zip7Loader);
    const zip5LoaderKeys = Object.keys(zip5Loader);
    const zip7LoaderOnlyThisHelloWorksKeys = Object.keys(
      zip7LoaderOnlyThisHelloWorks
    );

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

  private getKeys(keys: any, name: Array<string>, data: PostalMaster): any {
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
