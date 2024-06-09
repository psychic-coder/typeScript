


//functions
//the ":number" written after the curved brackets makes sure that we return only number
function addTwo(num:number):number{
        return num+2 ;
}
function getUpper(val:string){
    return val.toUpperCase()
}
function signUpUser(name:string,email:string,isPaid:boolean){
}

//overhere we gave a default value to the boolean
let loginUser=(email:string,name:string,ispaid:boolean=false)=>{
}




//the below situation can happen if we want to return more than one type
// function getvalue(myVal:number){
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }




const getHello=(s:string):string=>{
  return ""
}

// const heros=["ironman","spiderman","ironman"]
const heros=[1,2,3,4,5]
//typescript automatically change the type to number from string
heros.map((hero):string=>{
        return `hero is ${hero}`
})


// we mentioned never which means it will never return a value 
//its similar to void but is mostly used for handling errors
function consoleError(errmsg:string):never{
    throw new Error(errmsg)
}



let value=addTwo(5)
getUpper("bfo")
signUpUser("name","name",true)
loginUser("hell","hmm")

export{}