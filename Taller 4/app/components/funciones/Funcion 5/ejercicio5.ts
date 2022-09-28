let arr1 : any = [1, 2, 3, 4, 5];
 let arr2 : any = [2, 3, 6];
 
 function Contain(a:any, b:any) {
    let allFounded = b.every( (b: any) => a.includes(b));
    console.log(allFounded);
 }

 Contain(arr1,arr2);

 module.exports = Contain;