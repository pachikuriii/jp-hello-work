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
const zip5Loader = require("../data/zip5.json").zip5;
const zip7Loader = require("../data/zip7.json").zip7;

class HelloWork {
  address: Address;
  name: Array<string>;

  private constructor(zipcode: string | number, Oaza: any) {
    this.address = Oaza.byZipcode(zipcode)[0];
    this.name = this.getName();
  }

  static byZipcode(zipcode: string | number) {
    return new HelloWork(zipcode, Oaza);
  }

  private getName(): Array<string> {
    const loaders: Array<PostalMaster> = [
      zip7Loader.onlythishelloworks,
      zip7Loader.helloworks,
      zip5Loader.helloworks,
    ];
    return this.nameSearcher(loaders);
  }

  private nameSearcher(loaders: Array<PostalMaster>): Array<string> {
    const name: Array<string> = [];
    for (const loader of loaders) {
      for (const key of Object.keys(loader)) {
        if (
          loader === zip7Loader.onlythishelloworks &&
          this.address.code in zip7Loader.onlythishelloworks[key]
        ) {
          name.push(key);
          return name;
        }
        if (
          loader === zip7Loader.helloworks &&
          this.address.code in zip7Loader.helloworks[key]
        )
          name.push(key);
        if (
          loader === zip5Loader.helloworks &&
          this.address.city.code in zip5Loader.helloworks[key]
        )
          name.push(key);
      }
    }
    return name;
  }
}
