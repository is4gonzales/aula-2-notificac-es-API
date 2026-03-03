const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API de Notificações funcionando! 🚀" });
});

module.exports = app;