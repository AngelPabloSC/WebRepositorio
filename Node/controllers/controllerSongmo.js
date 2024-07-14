
var song=requiere("../models/song_model.js"),
    express = requiere('express'),
    router = express.router(
    );

    router.post("/crearSong",(req,res)=>{
        var body = req.body.nombre;
        song.insertMany({
            nombre:body.title,
            autor:body.autor,
            interprete:body.interprete,
            genero:body.genero,
            duration:body.duration,
            fotografi:body.fotografi,
            letra:body.letra,
            anio:body.anio,

        },). then(function(){
            res.status(200).jason("Datos Guardaos")
            console.log("Seccessfully saved default items to DB")
        })
        .cath(function(err){
            console.log(err);
            throw err;
        });;
            
    });
    module.exports = router;
    