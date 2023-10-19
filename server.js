const express =require('express');
const app =require('./app');
const connectDb =require('./database/db')
const dotenv = require('dotenv');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
const test =()=>{
    myEmitter.on('event', () => {
    console.log('First listener');
});myEmitter.on('event', () => {
    console.log('Second listener');
    myEmitter.emit('event');
});myEmitter.emit('event');
}

const test2=setTimeout(()=>{
    test();

},1000)
setTimeout(()=>{
    clearTimeout(test2)
},2000)

dotenv.config();
connectDb();
console.log(1);
setTimeout(function() {
console.log(2);}, 0);
process.nextTick(function() {console.log(3);});
console.log(4);

app.listen(process.env.PORT,()=>{
    console.log('server is running on port 8000');
})