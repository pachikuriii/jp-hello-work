
export declare namespace HelloWorkSettings {
  interface PostalKey { [zip: string]: string[] }
  interface Key { [hellowork: string]: PostalKey }
  interface City { code: string }
  interface Address {
    code: string
    city: City
  }
}

export declare class HelloWork {
  address: HelloWorkSettings.Address
  name: string[]
  private constructor (zipcode: string | number)
  static byZipCode (zipcode: string | number): HelloWork
  private readonly getName: string[]
  private nameSearcher (loaders: HelloWorkSettings.Key[]): string[]
}
