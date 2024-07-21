const EventEmitter=require("events");
const obj= new EventEmitter();

obj.on("greet",(name)=>{
    console.log(`Hello ${name}`);
});
obj.emit("greet","Ammu");



 // "type":"module",