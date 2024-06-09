interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

//we can even pass methods in interface for implementation
interface story{
    createStory():void
}

//overhere are implementing an interface
// we can even use private in place of public
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto,story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    // we can add new properties as the one below but there can never be a situation where we use less than what mentioned above
    public short: string,
  ) {}

  createStory(): void {
      console.log("story was created")
  }
}
