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
IdentityThree(3)

// we can also define it in the below way

function IndetityFour<T>(val:T):T{
    return val
}

interface bottle{
    brand:string,
    type:number,
}

//we created a data type of our own
IndetityFour<bottle>({brand:"wef",type:32})