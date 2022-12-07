
export declare namespace HelloWorkSettings {
  type PostalKey = { [zip: string]: string[] };
  type Key = { [hellowork: string]: PostalKey };
  type City = { code: string };
  type Address = {
    code: string;
    city: City;
  };
  }

 export declare class HelloWork {
    address: HelloWorkSettings.Address;
    name: string[];
    private constructor(zipcode: string | number)
    static byZipCode(zipcode: string | number): HelloWork;
    private getName: string[];
    private nameSearcher(loaders: HelloWorkSettings.Key[]): string[];
 }
