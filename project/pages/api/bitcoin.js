import axios from 'axios'
    import NodeCache from 'node-cache'
    
    const cache = new NodeCache({ stdTTL: 300 })
    
    export default async function handler(req, res) {
      try {
        const cachedData = cache.get('bitcoinData')
        if (cachedData) {
          return res.status(200).json(cachedData)
        }
    
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
          {
            params: {
              vs_currency: 'usd',
              days: '30',
              interval: 'daily'
            }
          }
        )
    
        cache.set('bitcoinData', response.data)
        res.status(200).json(response.data)
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Bitcoin data' })
      }
    }
