//requirementos express
const express = require('express')
const app = express()
app.use(express.json());
//requerimentos xlsx
const xlsx = require("xlsx")
const file = "./file_example.xlsx"
//requerimentos cors
const cors = require("cors")
app.use(cors()); //após a criação do DNS, inseri-lo aqui 
//solicitação e manipulação de dados
app.get('/', function (req, res) {
  res.send('Hello World')
})
//solicitação xlsx
app.get('/login', (req, res) => {
    const workbook = xlsx.readFile(file);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    res.send(data);
});

//configuração da porta de saída 
app.listen(process.env.PORT || 3000);