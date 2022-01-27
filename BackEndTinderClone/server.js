import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors';

//App COnfig 
const app=express();
const port =process.env.PORT || 8001
const connection_url='mongodb+srv://rawaa:123@cluster0.ajwlh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Midlewares
app.use(express.json());
app.use(Cors());



//db config 

mongoose.connect(connection_url, {


})

//API endpoints

app.get('/',(req,res) => res.status(200).send('HeLLO RWI3A'));

app.post('/tinder/cards', (req,res) => {
    const dbCard =req.body;
    Cards.create(dbCard, (err,data)=> {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});


app.get('/tinder/cards' , (req,res) => {
    Cards.find( (err,data)=> {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});

//listener

app.listen(port, () => console.log(`Listenning on localhost: ${port}` ));
