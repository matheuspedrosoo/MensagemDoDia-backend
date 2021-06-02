const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

const port = process.env.PORT || 5000

let data = new Date()

let MensagemDoDia = require('./src/mensagemDoDia')

app.get('/', (req, res) => {
  let dia = data.getDate()
  let mensagem = MensagemDoDia.returnMenssageDay(dia)

  res.json({ mensagem: mensagem, dia: dia })
})

app.listen(port, () => console.log('Servidor rodando na porta: ' + port))
