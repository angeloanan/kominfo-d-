import { NextApiHandler } from 'next'

import { fetchTrustPositif } from '../../functions/fetchTrustPositif'

const handler: NextApiHandler = async (req, res) => {
  const trustPositifData = fetchTrustPositif()

  return res
    .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=3600')
    .json(trustPositifData)
}

export default handler
