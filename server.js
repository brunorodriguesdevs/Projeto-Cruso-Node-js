import app from './src/app.js'

const port = 3000

// escutar porta 3000
app.listen(port, () => {
  console.log(`servidor rodando no endereço http://localhost:${port}`)
})


