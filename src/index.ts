
class User{
//on using protected this property is accessible within this class and in all the other classess which will inherit this User class as a result we are able to access this in SubUser class,,, but we still can't access it outside these classes

  protected _courseCount=1 

  private readonly city:string=""
    constructor(
        public email:string,
        public name:string,
        private userId:string,
        ){
    }

    private deleteToken(){
        console.log("Token deleted");   
    }
   
    get CourseCount():number{
        return this._courseCount
    }

    set CourseCount(courseNum){
        if(courseNum<=1){
           throw new Error ("Course count should be more than 1") 
        }
        this._courseCount=courseNum
    }

}

//on using extends we have received all the properties of the parent class as in this case is User but we will not have access to the private properties
class SubUser extends User{
    isFamily:boolean=true
    changeCourseCount(){
        this._courseCount=4
    }
}

const rohit= new User("rohit@gmail.com","roh","fewf")




