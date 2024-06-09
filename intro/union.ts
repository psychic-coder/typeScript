let score:number|string=33

// a variable can have multiple data types

score=32

score="23"

type User={
    name:string;
    id:number
}
type Admin={
    username:string;
    id:number
}
// we created our own data types

let myname:User|Admin={
    username:"ewfwe",
    id:342
}
myname={
    name:"wfw",
    id:1321
}

//we can even use union in function where it can be of the type number or string
// function getDbId(id:number|string){
//     console.log(`DB is ${id}`)
// }
// getDbId(3);


function getDbId(id:number|string){
   // we are facing an error even after we have mentioned it to be a number or a string 
   // as ts is treating it as both at the same time

   //so we're type checkin the id
    if(typeof id ==="string")
    id.toLowerCase()
    if(typeof id==="number")
    id+=2

    console.log(id)
}


getDbId("feEDQw");


//array


//the data can either be all numbers or all string
const data:number[]|string[]=[1,23,3,5]


//now it can be both string or a number or even a boolean
const data1:(number|string|boolean)[]=[1,23,3,5,""]




let pi:3.14=3.14
//in this example we set the value of pi to be permanently 3.14 and we cannot change it
pi=21


