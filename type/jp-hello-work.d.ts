
export declare namespace HelloWorkSettings {
  interface PostalKey { [zip: string]: string[]| string }
  interface Loader { [hellowork: string]: PostalKey }
  interface City { code: string }
  interface Address {
    code: string
    city: City
  }
}

export declare class HelloWork {
  pref: string
  city : string
  town : string
  zip: string
  name: string[]

  private constructor (zipcode: string | number)
  static byZipCode (zipcode: string | number): HelloWork | Error
  private getName (address: HelloWorkSettings.Address): string[]
}
