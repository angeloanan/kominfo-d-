import https from 'https'
import { NextApiHandler } from 'next'

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

const handler: NextApiHandler = async (req, res) => {
  const trustPositifData = await fetch(
    'https://trustpositif.kominfo.go.id/Rest_server/getrecordsname_home',
    {
      method: 'POST',
      body: new URLSearchParams(req.body),
      agent: httpsAgent
    } as any
  ).then((res) => res.json())

  return res
    .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=3600')
    .json(trustPositifData)
}

export default handler
