const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

const port = process.env.PORT || 5000

let data = new Date()

let MessageDay = require('./src/mensagemDoDia')

app.get('/', (req, res) => {
  let day = data.getDate()
  let SelectMessage = MessageDay.returnMenssageDay(day)

  res.json({ mensagem: SelectMessage })
})

app.listen(port, () => console.log('Server runing on port: ' + port))
