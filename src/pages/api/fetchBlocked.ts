import { NextApiHandler } from 'next'

import { websites } from '../../_data/websites'
import type { IndiWTFResponse } from '../../types/IndiWTFResponse'

const USER_AGENT =
  'Mozilla/5.0 (compatible; Kominfod/1.0; +https://github.com/angeloanan/kominfo-d-)'

const fetchIndiWtfStatus = async (url: string): Promise<boolean> => {
  try {
    const req = await fetch(`https://indi.wtf/api/v1/check?url=${encodeURIComponent(url)}`, {
      headers: { 'user-agent': USER_AGENT, 'accept-encoding': 'gzip, deflate, br' }
    })

    try {
      if (req.status != 200) {
        console.error(`${url} has status ${req.status} (${req.statusText})`)
      }

      const jsonData = (await req.json()) as IndiWTFResponse

      return jsonData.success
    } catch (e) {
      console.log(`${url} returned invalid JSON: ${await req.text()}`)
      // TODO: Figure out what to do here
      return true
    }
  } catch (e) {
    console.error(`Error fetching URL ${url}\n${e}\n`)

    // TODO: Figure out what to do here
    return true
  }
}

/**
 * Appends the protocol of the url (https://) if it is missing.
 * @param url URL of websites to have their protocol appended
 */
const appendUrlProtocol = (url: string): string =>
  url.toLowerCase().startsWith('http') ? url : `http://${url}`

export const generateBlockList = async () => {
  const sites: Record<string, boolean> = {}

  await Promise.all(
    websites.map(async (w) => {
      const url = w.website
      const websiteStatus = await fetchIndiWtfStatus(appendUrlProtocol(url))

      // Sometimes, indi.wtf request times out.
      if (websiteStatus != null) {
        sites[url] = !websiteStatus
      }
    })
  )

  // // Alternatively, using for await of
  // for await (const w of websites) {
  //   const url = w.website
  //   const websiteStatus = await fetchIndiWtfStatus(appendUrlProtocol(url))

  //   // Sometimes, indi.wtf request times out.
  //   if (websiteStatus != null) {
  //     sites[url] = websiteStatus
  //   }
  // }

  return sites
}

const handler: NextApiHandler = async (req, res) => {
  const blockList = generateBlockList()

  return res
    .setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=21600')
    .json(blockList)
}

export default handler
