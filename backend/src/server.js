import express from 'express'
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json());
app.get('/hello',(req,res) => res.send("Hello"));
app.get('/hello/:name',(req,res) => res.send(`Hello ${req.params.name} !!`));

app.get('/hello',(req,res) => res.send("Hello"));

app.listen(8000 ,() => console.log("App is listening to 8000"));