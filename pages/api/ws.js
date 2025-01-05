import { WebSocketServer } from 'ws'
    
    const wss = new WebSocketServer({ port: 3001 })
    
    wss.on('connection', (ws) => {
      ws.on('message', (message) => {
        console.log('Received:', message.toString())
      })
    
      const sendPriceUpdate = () => {
        const price = (Math.random() * 1000).toFixed(2)
        ws.send(JSON.stringify({ type: 'priceUpdate', price }))
      }
    
      const interval = setInterval(sendPriceUpdate, 5000)
    
      ws.on('close', () => {
        clearInterval(interval)
      })
    })
