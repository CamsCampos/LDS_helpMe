const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const bodyParser = require("body-parser");

require("./database");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors());
app.use(cors(corsOptions));
app.use(routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
