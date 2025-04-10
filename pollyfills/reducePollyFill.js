let a=[1,2,3,4,5];

// const res=a.reduce((acc,ele)=>{
// 	return acc+ele;
// },0)

Array.prototype.myReduce=function(cb,initialVal){
    let acc=initialVal;
    let arr=this;
    for(let i=0;i<arr.length;i++)
    {
    acc=acc?cb(acc,arr[i]):arr[i];
    }
    return acc;
}
const ans=a.myReduce((acc,ele)=>{
	return acc+ele;
},0)
console.log(ans);
