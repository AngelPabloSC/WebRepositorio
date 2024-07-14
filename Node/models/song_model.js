var mongoose = require('mongoose');
Schema = mongoose.Schema;

var songSchema = new mongoose.Schema({
                title:{type:String},
                autor:{type:String},
                interprete:{type:String},
                genero:{type:String},
                duration:{type:String},
                fotografi:{type:Object},
                letra:{type:String},
                anio:{type:String},

});

var song= mongoose.model('song',songSchema);
 module.exports=song;