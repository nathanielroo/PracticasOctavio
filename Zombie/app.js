var http = require('http');
var path = require('path');
var express = require('express');

var app= express();

app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');
app.get("/",function(req, res){
    res.render("header");
})
app.get('/',(request, response)=> response.render('header'));
app.get('/header',(request,response)=>response.render('header'));

app.use((request,response)=> response.status(404).render('404'));

http.createServer(app).listen(3000,()=>
console.log('La aplicación Guestbook está corrienda en el puerto 3000')
);