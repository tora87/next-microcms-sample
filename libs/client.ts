import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'furniture-design',
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
})
