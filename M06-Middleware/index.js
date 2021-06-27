var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var logger = require("morgan");

const middleware = (req,res,next)=>{
    if(req.params.umur >= 18){
        console.log("Silahkan Masukan data karyawan");
        const err = {
            status: " Berdasarkan ketentuan, umur anda sudah mencukupi",
            data : " Anda telah berusia " + req.params.umur + " tahun", 
        };
        next(err);
    }else{
        console.log("Minimal Usia karyawan >=18 tahun");
        const err = {
            status: " Maaf! Berdasarkan ketentuan yang berlaku, anda belum diperbolehkan",
            data : "hal ini dikarenakan anda masih berusia " + req.params.umur + " tahun",
        };
        next(err);
    }
}
app.get('/api/:umur',middleware,function(req,res){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.send(req.params);
});
app.use((error,req,res,next)=>{
    res.send(error);
});

app.listen(4000,function(){
    console.log("Server run");
})