var mysql = requiere ('mysql');
Schema = mysql.Schema;

var song = new mysql.Schema({
                title:{tyoe:String},
                autor:{type:String},
                interprete:{type:String},
                genero:{type:String},
                duration:{type:String},
                fotografi:{type:Object},
                letra:{type:String},
                anio:{type:String},

            });

var songmysql= mongoose.model(songmysql.song);
module.exports=song;