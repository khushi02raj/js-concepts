let a=[1,2,3,4,5];

let res=a.filter((el)=>el>2)
// console.log(res)

Array.prototype.myFilter=function(cb){
    let arr=this;
    let res=[];
    for(let i=0;i<arr.length;i++)
    {
        if(cb(arr[i])) //((el)=>el>2) is this fn
        res.push(arr[i])
    }
    return res;
    }
let ans=a.myFilter((el)=>el>2)
console.log(ans) // [3,4,5]