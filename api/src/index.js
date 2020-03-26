const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(3333)



/*
tipos de parâmetros:

query: parametros nomeados enviados na rota após "?"(filtros, paginação)
route: parametros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/


/*
  DB 

  Driver: SELECT * FROM users
  Query Buldeir: table('users').select(*).where()...

*/


