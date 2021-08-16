'use strict';

const express=require('express');
const app =express();

app.use(express.json());

const notFoundHandelar=require('./error-handelars/404');
const errorHandelar=require('./error-handelars/500');
const loggerMiddleware =require('./error-handelars/middleware/logger');
const validatorMiddleware =require('./error-handelars/middleware/validator');

app.use(loggerMiddleware);

app.get('/',(req,res)=>{
    res.status(200).send('Hello world')
})


app.get('/person',(req,res)=>{
    const message={
        name:req.query.name
    }
    if(req.query.name !==undefined){
        res.status(200).json(message)
    }else{
        errorHandelar();
    }
});




app.use('*',notFoundHandelar);
app.use(errorHandelar);

function start (PORT){
    app.listen(PORT,()=>console.log(`listening on port ${PORT}`))
}

module.exports={
    start,
    app
}