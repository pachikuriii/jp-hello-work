import { Oaza } from 'jp-zipcode-lookup'
import { zip5 } from '../data/zip5.json'
import { zip7 } from '../data/zip7.json'
import { HelloWorkSettings } from '../type/jp-hello-work'

const loaders: HelloWorkSettings.Loader[] = [
  zip7.helloWorksForLimitedArea,
  zip7.helloWorks,
  zip5.helloWorks
]

export class HelloWork {
  pref: string
  city : string
  town : string
  zip: string
  name: string[]

  private constructor(zipcode: string | number) {
    const address = Oaza.byZipcode(zipcode)[0]
    this.pref = address.pref.name
    this.city = address.city.name
    this.town = address.name
    this.zip = String(zipcode)
    this.name = this.getName(address)
  }

  static byZipCode(zipcode: string | number) {
    return new HelloWork(zipcode)
  }

  private getName(address: HelloWorkSettings.Address) {
    const name: string[] = []
    for (const loader of loaders) {
      for (const key of Object.keys(loader)) {
        if (
          loader === zip7.helloWorksForLimitedArea &&
          address.code in loader[key]
        ) {
          name.push(key)
          return name
        }
        if (
          loader === zip7.helloWorks &&
          address.code in loader[key]
        ) {
          name.push(key)
        }
        if (
          loader === zip5.helloWorks &&
          address.city.code in loader[key]
        ) {
          name.push(key)
        }
      }
    }
    return name
  }
}
