/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Oaza } from 'jp-zipcode-lookup'
import { zip5 } from '../data/zip5.json'
import { zip7 } from '../data/zip7.json'
import { City } from '../types/types'
type Address = { code: string, city: City }
type PostalKey = { [zip: string]: string[] }
type HelloWorkKey = { [hellowork: string]: PostalKey }

export class HelloWork {
  address: Address
  name: string[]

  private constructor (zipcode: string | number) {
    this.address = Oaza.byZipcode(zipcode)[0]
    this.name = this.getName()
  }

  static byZipcode (zipcode: string | number): HelloWork {
    return new HelloWork(zipcode)
  }

  private getName (): string[] {
    const loaders: HelloWorkKey[] = [
      zip7.helloWorksForLimitedArea,
      zip7.helloWorks,
      zip5.helloWorks
    ]
    return this.nameSearcher(loaders)
  }

  private nameSearcher (loaders: HelloWorkKey[]): string[] {
    const name: string[] = []
    for (const loader of loaders) {
      for (const key of Object.keys(loader)) {
        if (
          loader === zip7.helloWorksForLimitedArea &&
          this.address.code in loader[key]
        ) {
          name.push(key)
          return name
        }
        if (
          loader === zip7.helloWorks &&
          this.address.code in loader[key]
        ) {
          name.push(key)
        }
        if (
          loader === zip5.helloWorks &&
          this.address.city.code in loader[key]
        ) {
          name.push(key)
        }
      }
    }
    return name
  }
}
console.log(HelloWork.byZipcode(6550872))
