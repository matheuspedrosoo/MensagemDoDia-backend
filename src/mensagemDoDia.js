let dados = require('./db/dados')

function returnMenssageDay(day) {
  return dados.frases[day - 1]
}

exports.returnMenssageDay = returnMenssageDay
