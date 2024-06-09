const User={
    name :"hitesh",
    email:"rohit",
    isActive:true,
}

// function createUser({name:string,isPaid:boolean}){
// }
// let newUser={name:"hitesh",isPaid:false,emai:"eaca"}
// //even if we have not  mentioned the email in the accepting field of the createUser we can still pass it in this form
// createUser(newUser)







// //the below function type checked it to return an object
// //we event mentioned the values of the object 
// function createCourse():{name:string,price:number}{
//     return {name:"React",price:23}
// }


// the type keyword is used to define custom types. This is a powerful feature that allows developers to create more readable and maintainable code by giving meaningful names to complex type definitions.
// type User={
//     name:string;
//     email:string;
//     isActive:boolean
// }

// //the below code we defined the type of the input to be User and the output to be User
// function createUser(user:User):User{
//     return {name:"",email:"",isActive:true}
// }
// //in the below code we have given the input as type user
// createUser({name:"",email:"",isActive:true});




//the readonly makes sure that no one can modify the _id
//the "?" makes the credit card field optional and its not necessary to specify it
type User={
   readonly _id:string
   name:string,
   email:string,
   isActive:boolean 
   creditCardDetails?:number
}

let myUser:User={
    _id:"3424",
    name:"ed",
    email:"fae",
    isActive:true
}

//we can modify the email but we cannot modify the _id as its readonly
myUser.email="Fwfwe"
// myUser._id="weffwe"



//we combined the cardNumber and cardDate into a single cardDetails along with an extra field called cvv
 type cardNumber={
    cardnumber:string,
 }
 type cardDate={
    cardDate:string
 }
 type  cardDetails= cardNumber & cardDate &{
    cvv:number
 }



export{}