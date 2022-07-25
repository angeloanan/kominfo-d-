import { NextApiHandler } from 'next'

import defaultData from '../../../public/data.json'
import { PSEData } from '../../types/PSEData'

const defaultDataTransformed = (defaultData as PSEData[]).map((e) => ({
  attributes: {
    nama: e.attributes.nama,
    nama_perusahaan: e.attributes.nama_perusahaan,
    website: e.attributes.website
  }
}))

const handler: NextApiHandler = async (req, res) => {
  return res
    .setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=3600')
    .json(defaultDataTransformed)
}

export default handler
