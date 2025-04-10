const o1={
    name:'Khushi',
    age:"25",
    greet:function(a,b,c){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. ${a} ${b} ${c}`)
    }
}

const o2={
    name:'John',
    age:"30"
}
o1.greet.apply(o2,['a','b',123]) // Hello, my name is John and I am 30 years old. 

Function.prototype.myApply=function(context,params=[])
{
    if(!context)
    return context;
    if(typeof context!=='object')
    return	context;
    
    context.fn=this;
    
    context.fn(...params)
}