
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
// we have added the githubToken in the above interface
interface User{
    githubToken?:string
}

//now the interface contains the github token
const rohit:User={
    dbId:3431,
    email:"13",
    userId:313,
    startTrail:()=>"Fwf",
    getCoupon:(coupanname:"w3r")=>31,
    githubToken:"fwefwef"
}

//we can even do the inheritance in interface
//adminnwill have all the properties of user alongwith its own properties
interface admin extends User{
role:"we"|"Wfw"|"fw"
}