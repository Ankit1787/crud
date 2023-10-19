const mongoose = require('mongoose');

const bookSchema=new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        minlength:[3,'the min length of title is 3'],
        maxlength:[30,'the max length of title is 30']
    },
    author:{
        type:String,
        required:true,
        trim:true,
        minlength:[3,'the min length of name is 3'],
        maxlength:[30,'the max length of name is 30']
    },
    publishYear:{
        type:Date,
        required:true,
    },
    genre:{
        type:String,
        required:true,

    }


})
// bookSchema.virtual('publishDate').get(function () {
//     return this.publishYear.getFullYear();
// });

module.exports=mongoose.model('Book',bookSchema);