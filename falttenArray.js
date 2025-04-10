let a=[1,2,[3,[4,5]]];

console.log(a.flat(1));

Array.prototype.myFlat=function(depth)
{
	let arr=this;
	let res=[];
	if(!Array.isArray(arr))
    {
        throw new Error("Not an array");
    }
    arr.forEach((el)=>{
        if(Array.isArray(el)&& depth>0)
        {
            res.push(...el.myFlat(depth-1));
        }
        else
        {
        res.push(el);
        }
    })

    return res;
}

console.log(a.myFlat(1)); // [1,2,3,[4,5]]
