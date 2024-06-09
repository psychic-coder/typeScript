const score: Array<number> = [];
const names: Array<string> = [];

function IndetityOne(val: any): any {
  return val;
}

//the below generics are used to return a value of the same type as of the input
//for example if we give number as the input type then the return type will also automatically become number
function IdentityThree<Type>(val: Type): Type {
  return val;
}
IdentityThree(3);

// we can also define it in the below way

function IndetityFour<T>(val: T): T {
  return val;
}

interface bottle {
  brand: string;
  type: number;
}

//we created a data type of our own
IndetityFour<bottle>({ brand: "wef", type: 32 });

//as we have used an array of type T, and the return type is also T, so the return should be one of the value from that array
function getSearchProducts<T>(products: T[]): T {
  //do some operations
  const idx = 1;
  return products[idx];
}

//T is the generics , after the colon we define the data type
//without the generics its a normal function where in place of T we give number ,string .....

const getMoreSearch = <T>(products: T[]): T => {
  //do some database operations
  const myIdx = 2;
  return products[myIdx];
};
// in some places the generics are defined as <T,> 



interface Database{
    connection:string,
    username:string,
    password:string,
}



function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3,{})


interface Quiz{
    name:string,
    type:string,
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart:T[]=[]
    
    addToCart(product:T){
        this.cart.push(product)
    }
}

