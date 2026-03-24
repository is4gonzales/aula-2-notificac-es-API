const express = require("express");
const cors = require("cors");

const logger = require("./middlewares/logger");
const notFound = require("./middlewares/notFound");

const notificacoesRoutes = require("./routes/notificacoesRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.use("/notificacoes", notificacoesRoutes);

app.get("/", (req, res) => {
  res.json({ mensagem: "API de Notificações funcionando!" });
});

app.use(notFound);

module.exports = app;