import { NextApiHandler } from 'next'
import { setTimeout } from 'timers/promises'

import defaultData from './default.json'

const handler: NextApiHandler = async (req, res) => {
  return res
    .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=900')
    .json(defaultData)

  // try {
  //   const race = await Promise.race([
  //     setTimeout(8000, null),
  //     fetch('https://pse.kominfo.go.id/api/v1/jsonapi/tdpse-terbit')
  //   ])

  //   if (race != null) {
  //     return res
  //       .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=3600')
  //       .json(await race.json())
  //   } else {
  //     return res
  //       .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=3600')
  //       .json(defaultData)
  //   }
  // } catch {
  //   // Use default
  //   return res
  //     .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=3600')
  //     .json(defaultData)
  // }
}

export default handler
