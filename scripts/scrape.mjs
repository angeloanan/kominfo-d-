// Run this with --experimental-fetch

import fs from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

// Will use later on for writing
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const generateAsingApiPageNumber = (number = 0) => {
  return `https://pse.kominfo.go.id/static/json-static/ASING_TERDAFTAR/${number}.json`
}

const generateLokalApiPageNumber = (number = 0) => {
  return `https://pse.kominfo.go.id/static/json-static/LOKAL_TERDAFTAR/${number}.json`
}

const [asingInitialReq, lokalInitialReq] = await Promise.all([
  fetch(generateAsingApiPageNumber()),
  fetch(generateLokalApiPageNumber())
])
const [asingInitialRes, lokalInitialRes] = await Promise.all([
  asingInitialReq.json(),
  lokalInitialReq.json()
])
const asingApiResponseMeta = asingInitialRes.meta
const lokalApiResponseMeta = lokalInitialRes.meta

const asingArr = Array.from(Array(asingApiResponseMeta.page.lastPage).keys())
const lokalArr = Array.from(Array(lokalApiResponseMeta.page.lastPage).keys())

// Removes 0th element because we have it already
asingArr.shift()
lokalArr.shift()

console.group(`# Fetching data asing - ${asingArr.length} halaman`)
console.time('data-asing')
// TODO: This is still possible since there are only like 80 pages of data here
// This might cause socket hangups when more companies registers
const asingResult = await Promise.all(
  asingArr.map(async (pageNum) => {
    const url = generateAsingApiPageNumber(pageNum)
    console.log(`Fetching halaman ${pageNum}`)
    const fetchReq = await fetch(url)
    const fetchRes = await fetchReq.json()
    console.log(`Selesai mengambil halaman ${pageNum}`)

    return fetchRes
  })
)
console.groupEnd()
console.timeEnd('data-asing')

console.group(`# Fetching data lokal - ${lokalArr.length} halaman`)
console.time('data-lokal')
const lokalResult = []
for await (const pageNum of lokalArr) {
  const url = generateLokalApiPageNumber(pageNum)

  console.info(`Fetching halaman ${pageNum}`)
  const fetchReq = await fetch(url)
  const fetchRes = await fetchReq.json()

  lokalResult.push(fetchRes)
}
console.groupEnd()
console.timeEnd('data-lokal')

// Add back 0th element
asingResult.unshift(asingInitialRes)
lokalResult.unshift(lokalInitialRes)

const transposedResult = asingResult
  .flatMap((p) => p.data)
  .concat(lokalResult.flatMap((p) => p.data))

console.group('# Final data output')
console.log(transposedResult)
console.groupEnd()

console.log(`# Writing to file ${join(__dirname, '..', 'public', 'data.json')}`)
await fs.writeFile(
  join(__dirname, '..', 'public', 'data.json'),
  JSON.stringify(transposedResult, null, 2),
  {
    encoding: 'utf8',
    flag: 'w'
  }
)
