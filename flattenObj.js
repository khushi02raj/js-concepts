let obj={
    name:"Jay",
    age:30,
    address:{
        country:"India",
        state:"Maharshtra",
        city:"Pune",
    }
}
const flattenObj=(obj)=>{
let res={};
for(const i in obj)
{
    if(typeof obj[i]==='object' && !Array.isArray(obj[i]))
    {
        const innerObj=flattenObj(obj[i]);
        for(const j in innerObj)
        {
            res[i+'.'+j]=innerObj[j]
        }
    }
    else
    {
    res[i]=obj[i];
    }
}
return res;
}
console.log(flattenObj(obj));
