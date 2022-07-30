import https from 'https'

import { devStarterPack, idnStarterPack, linuxStarterPack, websiteListUSA } from '../_data/websites'

const allWebsitesCombined = [
  devStarterPack,
  idnStarterPack,
  linuxStarterPack,
  websiteListUSA
].flat()

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

export const fetchTrustPositif = async () => {
  const requestChunks = Array.from(
    { length: Math.ceil(allWebsitesCombined.length / 100) },
    (_, i) => allWebsitesCombined.slice(i * 100, i * 100 + 100)
  )

  const requests: Promise<Record<string, boolean>>[] = []

  requestChunks.forEach((chunk) => {
    requests.push(
      fetch('https://trustpositif.kominfo.go.id/Rest_server/getrecordsname_home', {
        method: 'POST',
        body: new URLSearchParams({
          name: chunk
            .map((item) => item.website.replace(/(https?:\/\/)/, '').replace(/www\./, ''))
            .join('\n')
        }),
        agent: httpsAgent
      } as any)
        .then((res) => res.json())
        .then((res) => {
          let trustPositifStatus: Record<string, boolean> = {}
          res.values.forEach((item: any) => {
            trustPositifStatus[item.Domain] = item.Status === 'Ada'
          })
          return trustPositifStatus
        })
    )
  })

  const trustPositifData = await Promise.all(requests)

  return Object.assign({}, ...trustPositifData)
}
