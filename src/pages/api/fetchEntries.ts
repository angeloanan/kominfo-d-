import { NextApiHandler } from 'next'
import { setTimeout } from 'timers/promises'

import defaultData from './default.json'

export interface KominfoData {
  jsonapi: Jsonapi
  data: Datum[]
}

export interface Datum {
  type: Type
  id: string
  attributes: { [key: string]: null | string }
  links: Links
}

export interface Links {
  self: string
}

export enum Type {
  TdpseTerbit = 'tdpseTerbit'
}

export interface Jsonapi {
  version: string
}

const defaultDataTransformed = (defaultData as KominfoData).data.map((e) => ({
  attributes: {
    nama: e.attributes.nama,
    nama_perusahaan: e.attributes.nama_perusahaan,
    website: e.attributes.website
  }
}))

const handler: NextApiHandler = async (req, res) => {
  // return res
  //   .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=900')
  //   .json(defaultData)

  try {
    const race = await Promise.race([
      setTimeout(8000, null),
      fetch('https://pse.kominfo.go.id/api/v1/jsonapi/tdpse-terbit')
    ])

    if (race != null) {
      const data = (await race.json()) as KominfoData
      const transformedData = data.data.map((e) => ({
        attributes: {
          nama: e.attributes.nama,
          nama_perusahaan: e.attributes.nama_perusahaan,
          website: e.attributes.website
        }
      }))

      return res
        .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=3600')
        .json(transformedData)
    } else {
      return res
        .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=3600')
        .json(defaultDataTransformed)
    }
  } catch {
    // Use default
    return res
      .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=3600')
      .json(defaultDataTransformed)
  }
}

export default handler
