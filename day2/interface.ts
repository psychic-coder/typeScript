
//we are defining an interface
interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    // the googleId is not compulsory the user can pass it or not
    googleId?:string,

    //we defined a method in the object
    //the 2nd method method of defining an object
    startTrail():string

    getCoupon(coupanname:string):number
}
const hitesh:User={
    dbId:1312,
    email:"dedw",
    userId:13,

    //we defined a method in the object
    startTrail:()=>{
        return "tri"
    },

    getCoupon:(name:"roh10")=>{
        return 20
    }
}

