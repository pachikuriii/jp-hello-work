import { Oaza } from "jp-zipcode-lookup";

type City = { code: string };
type Address = { code: string; city: City };
type PostalKey = { [zip: string]: string[] };
type HelloWorkKey = { [hellowork: string]: PostalKey };

const zip5Loader: Readonly<HelloWorkKey> = require("../data/zip5.json").zip5;
const zip7Loader: Readonly<HelloWorkKey> = require("../data/zip7.json").zip7;

class HelloWork {
  address: Address;
  name: string[];

  private constructor(zipcode: string | number) {
    this.address = Oaza.byZipcode(zipcode)[0]!;
    this.name = this.getName();
  }

  static byZipcode(zipcode: string | number) {
    return new HelloWork(zipcode);
  }

  private getName(): string[] {
    const loaders: PostalKey[] = [
      zip7Loader.onlythishelloworks,
      zip7Loader.helloworks,
      zip5Loader.helloworks,
    ];
    return this.nameSearcher(loaders);
  }

  private nameSearcher(loaders: PostalKey[]): string[] {
    const name: string[] = [];
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
console.log(HelloWork.byZipcode(6550872));
