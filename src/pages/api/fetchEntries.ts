import { NextApiHandler } from 'next'

import defaultData from './default.json'

const handler: NextApiHandler = async (req, res) => {
  return res
    .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=900')
    .json(defaultData)

  // try {
  //   const dataFetch = await fetch('https://pse.kominfo.go.id/api/v1/jsonapi/tdpse-terbit')
  //   const dataJson = await dataFetch.json()

  //   return res
  //     .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=900')
  //     .json(dataJson)
  // } catch {
  //   // Use default
  //   return res
  //     .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=900')
  //     .json(defaultData)
  // }
}

export default handler
