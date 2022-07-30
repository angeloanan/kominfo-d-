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
  const trustPositifData: Record<string, boolean> = await fetch(
    'https://trustpositif.kominfo.go.id/Rest_server/getrecordsname_home',
    {
      method: 'POST',
      body: new URLSearchParams({
        name: allWebsitesCombined
          .map((item) => item.website.replace(/(https?:\/\/)/, '').replace(/www\./, ''))
          .join('\n')
      }),
      agent: httpsAgent
    } as any
  )
    .then((res) => res.json())
    .then((res) => {
      let trustPositifStatus: Record<string, boolean> = {}
      res.values.forEach((item: any) => {
        trustPositifStatus[item.Domain] = item.Status === 'Ada'
      })
      return trustPositifStatus
    })

  return trustPositifData
}
