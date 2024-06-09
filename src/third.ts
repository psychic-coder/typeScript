

//as soon as we mark it as abstract we cannot create a class out of it
abstract class TakePhoto{
constructor(
    public cameraMode:string,
    public filter:string,
){}
    //we have to implement getsepia in insta other wise it'll show error
    //its important to be implemented
   abstract getSepia():void


    //getReelTime is a feature which will be implemented by default 
   getReelTime():number{
    //some calc
    return 9
   }
}
class Insta extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,   
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        console.log("sepia")
    }
}
 const roh1t=new Insta("test","test",8)
 roh1t.getReelTime()