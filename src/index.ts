import { Oaza } from 'jp-zipcode-lookup'
import { zip5 } from '../data/zip5.json'
import { zip7 } from '../data/zip7.json'

interface City { code: string };
interface Address { code: string, city: City }
interface PostalKey { [zip: string]: string[] }
interface HelloWorkKey { [hellowork: string]: PostalKey }

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
    const loaders: HelloWorkKey[] = [zip5.helloworks, zip7.helloworks, zip7.onlythishelloworks]
    return this.nameSearcher(loaders)
  }

  private nameSearcher (loaders: HelloWorkKey[]): string[] {
    const name: string[] = []
    for (const loader of loaders) {
      for (const key of Object.keys(loader)) {
        if (
          loader === zip7.onlythishelloworks &&
          this.address.code in loader[key]
        ) {
          name.push(key)
          return name
        }
        if (
          loader === zip7.helloworks &&
          this.address.code in loader[key]
        ) {
          name.push(key)
        }
        if (
          loader === zip5.helloworks &&
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
