import { HelloWork } from '../src/jp-hello-work'

describe("valid input", () => {
  test("expect hellowork name for limited area", () => {
    const helloWork = HelloWork.byZipCode('0360202')
    expect(helloWork.name).toStrictEqual(['黒石'])
  })

  test("expect hellowork name for limited area", () => {
    const helloWork = HelloWork.byZipCode(6712412)
    expect(helloWork.name).toStrictEqual(['龍野'])
  })

  test('expect hellowork name for wide area', () => {
    const helloWork = HelloWork.byZipCode('2891737')
    expect(helloWork.name).toStrictEqual(['千葉'])
  })

  test('expect hellowork name for wide area', () => {
    const helloWork = HelloWork.byZipCode(3999101)
    expect(helloWork.name).toStrictEqual(['大町'])
  })

  test('expect hellowork name with multiple choices', () => {
    const helloWork = HelloWork.byZipCode('0494513')
    expect(helloWork.name).toStrictEqual(['函館 八雲出張所','函館'])
  })

  test('expect hellowork name with multiple choices', () => {
    const helloWork = HelloWork.byZipCode(6994221)
    expect(helloWork.name).toStrictEqual(['浜田 川本出張所', '浜田'])
  })
})

describe("invalid input", () => {
  test("expect zipcode written in not number throwes error", () => {
    expect(() => HelloWork.byZipCode('XXXXXXX')).toThrow(Error)
  })
  
  test("expect zipcode including dash throwes error", () => {
    expect(() => HelloWork.byZipCode(739-2631)).toThrow(Error)
  })
})
