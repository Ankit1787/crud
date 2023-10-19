
const Book =require('../models/bookmodels')
const Errorhandler=require('../utils/Errorhandler')
const errorMiddleware=require('../middleware/ErrorMiddleware')
exports.createBook=errorMiddleware(async(req,res,next)=>{

    const booksData=req.body;
  const books=[];
    for (const bookData of booksData){
    
        const {title,author,genre,publishYear}=bookData
        if(!title||!author||!genre||!publishYear){
    return next(new Errorhandler('Please enter all fields',400))
  }
    const book =new Book({
        title,
        author,
        genre,
        publishYear:new Date(publishYear)
        
    })

    const result =await book.save()
    books.push(result)
    if(!result)
  {
    return next(new Errorhandler('Book not created',400))
  }  
 
    }
  
    res.status(200).send({
    success:true,
    books
  })

  
 
})
exports.updateBook=errorMiddleware(async(req,res,next)=>{
 const {id}=req.params
  const book=await Book.findByIdAndUpdate(id,req.body,{
    new:true
  })
    if(!book){
      return next(new Errorhandler('Book not updated',400))
    
    }
    res.status(200).send({success:true,book})
  })
exports.deleteBook=errorMiddleware(async(req,res,next)=>{
  const {id}=req.params
  const book=await Book.findByIdAndDelete(id)
  if(!book){
    return next(new Errorhandler('Book not deleted',400))
  
  }
  res.status(200).send({success:true,book})


})
exports.getBook=errorMiddleware(async(req,res,next)=>{
    const book=await Book.find({})
    if(!book){
      return next(new Errorhandler('Books not found',400))
    
    
    }
    res.status(200).send({success:true,book})
})