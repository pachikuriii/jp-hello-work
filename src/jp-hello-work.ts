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
  address: HelloWorkSettings.Address
  name: string[]

  private constructor(zipcode: string | number) {
    this.address = Oaza.byZipcode(zipcode)[0]
    this.name = this.getName()
  }

  static byZipCode(zipcode: string | number) {
    try {
      return new HelloWork(zipcode)
    } catch (error) {
      throw new Error
    }
  }

  private getName () {
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
