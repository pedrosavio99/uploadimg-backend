require('dotenv').config();
const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose'); //esta para o mongocliente
const path = require('path')
const cors = require("cors")

const app = express();

// laks DATABASE SETUP ================
const monngo_url = 'mongodb+srv://pedrosavio99:mce0yM0mRPMWqrTG@cluster0.aqnti.mongodb.net/teste-db?retryWrites=true&w=majority'
mongoose.connect(monngo_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true})


const url = monngo_url;
const { MongoClient } = require('mongodb');
const client = new MongoClient(url);

const dbName = 'ImgesDB';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('images');

      //INSERIR DOCUMENTOS

//   const insertResult = await collection.insertMany([{ a: 'VC PENSA QUE O FLAMENGO É TIME?' }, { a: 2 }, { a: 3 }]);

//   console.log('Inserted documents =>', insertResult);
     return 'done.';}
  
main()
.then(console.log)
.catch(console.error)

.finally(() => client.close());


//=========================================================


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended:true}));
app.use(morgan('dev'));
app.use("/files",
    express.static(path.resolve(__dirname, "..","tmp","uploads"))
);

app.use(require("./routes"))

app.listen(3000);