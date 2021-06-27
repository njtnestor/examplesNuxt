import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Hola API dentro de Nuxt'
  })
})

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

export default app
