

//its a cautionary tale
function detectType(val:number|null){
    if(!val){
        console.log("please provide the val")
        return
    }
}

interface User{
    name:string,
    email:string
}
interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

//using the in we're checking whether the in property is present or not
//this procedure is called narrowing
function isAdminAccount(account:User|Admin){
   if ("isAdmin" in account){
        return account.isAdmin
   }
}



//instance of checks whether x is instance of any particular class or not
function lof(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase())
    }
}

type Fish={swim:()=>void};
type Bird={fly:()=>void};
//pet is a fish if it has method of .swim
// if the below returns true then we;re 100% sure its a fish
function isFish(pet:Fish | Bird):pet is Fish{
      return (pet as Fish).swim!==undefined
}


//we used the above isdFish mthod as a checker to check whether the pet is fish or bird
function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet
        return "Fish Food"
    }else{
       return  "bird food"
    }
}


interface circle{
    kind:"circle"
    radius:number
}
interface square{
    kind:"square"
    side:number
}
interface rectangle{
    kind:"rectangle"
    length:number
    width:number
}

type Shape=circle|square|rectangle

function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return Math.PI*shape.radius**2
    }
    // return shape.side*shape.side
}


function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI*shape.radius**2

        case "square":
             return shape.side*shape.side
    
        case "rectangle":
             return shape.length*shape.width

        default:
            const _default:never=shape
            return _default

    }
}