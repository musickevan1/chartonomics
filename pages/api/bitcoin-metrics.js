import axios from 'axios'
    import NodeCache from 'node-cache'
    
    const cache = new NodeCache({ stdTTL: 300 })
    
    export default async function handler(req, res) {
      try {
        const cachedData = cache.get('bitcoinMetrics')
        if (cachedData) {
          return res.status(200).json(cachedData)
        }
    
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin',
          {
            params: {
              localization: false,
              tickers: false,
              market_data: true,
              community_data: false,
              developer_data: false,
              sparkline: false
            }
          }
        )
    
        const metrics = {
          market_cap: response.data.market_data.market_cap.usd,
          total_volume: response.data.market_data.total_volume.usd,
          price_change_percentage_24h: response.data.market_data.price_change_percentage_24h,
          price_change_percentage_7d: response.data.market_data.price_change_percentage_7d_in_currency.usd
        }
    
        cache.set('bitcoinMetrics', metrics)
        res.status(200).json(metrics)
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Bitcoin metrics' })
      }
    }
