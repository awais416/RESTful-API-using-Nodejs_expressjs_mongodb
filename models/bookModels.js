var mongoose=require('mongoose');
     Schema= mongoose.Schema;

var bookModels=new Schema({
    title:{
        type:String
    },
    author:{
        type:String

    },
    genre:{
        type:String
    },
    read:{
        type:Boolean,default:false
    }},
    {collection:"random"});

module.exports=mongoose.model('Book', bookModels);