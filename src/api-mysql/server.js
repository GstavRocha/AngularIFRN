const express = require('express')
const app = express()
const mssql = require('mssql/msnodesqlv8')

const port = 3000

const conn = new mssql.ConnectionPool({
  driver: 'msnodesqlv8',
  server: 'localhost',
  database: 'WebBackEnd',
  user: 'sa',
  password: 'Sql2@19'
})

app.get('/cliente', function (req, res) {
  conn.connect().then((pool) => {
    const queryStr = 'SELECT * FROM Clientes'
    pool.query(queryStr).then((rows) => {
      res.send(rows.recordset)
    })
  })
})

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`)
})
