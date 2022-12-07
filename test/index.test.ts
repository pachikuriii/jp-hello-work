import { HelloWork } from '../src/jp-hello-work'

test('zipcode by number works', () => {
  const result = HelloWork.byZipCode(6550872)
  expect(result.name).toStrictEqual(['神戸'])
})

test('zipcode by string works', () => {
  const result = HelloWork.byZipCode('6550872')
  expect(result.name).toStrictEqual(['神戸'])
})

test('zipcode by number works', () => {
  const result = HelloWork.byZipCode(7460056)
  expect(result.name).toStrictEqual(['徳山'])
})
