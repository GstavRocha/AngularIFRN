const express = require('express');
const cors = require('cors');
const app = express();
app.get('/',(request))
app.get('/usuario',(req, res) => {
  let usuario = []
  usuario.push({
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name : "Michael",
        last_name : "Lawson",
  })

  res.status (200).send(usuario);
});

app.listen(3000, () => {
  console.log('Servidor testado')});
