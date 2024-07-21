const EventEmitter=require("events");

const eventObj=new EventEmitter();
//let k;
eventObj.on("WaterFull",()=>{
    console.log("Tank is full");
 setTimeout(()=>{
        console.log("Please turn of the top.Its a gentle remider!");
    },2000);
   // clearInterval(k);
})

eventObj.emit("WaterFull");