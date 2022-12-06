/* eslint-disable @typescript-eslint/consistent-type-definitions */
export declare type City = {
  code: string
}

export declare class HelloWork {
  address: { code: string, city: City }
  name: string[]
  static byZipcode (zipcode: string | number): HelloWork
}
