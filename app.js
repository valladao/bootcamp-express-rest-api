const express = require("express")
const app = express()

app.use(express.json())

app.delete("/dog/:id", (req, res) => {
  res.status(200).send("Dog deleted")
})

app.listen(3000, () => console.log("Server ready"))
