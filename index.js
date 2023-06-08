const exp = require('express')
const app = exp()

app.get('/', (req, res) => {
  res.send("HELLO LUCAS!!!")
})

app.listen(3000)
