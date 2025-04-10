const o1={
    name:'Khushi',
    age:"25",
    greet:function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const o2={
    name:'John',
    age:"30"
}
//  o1.greet.bind(o2)() // Hello, my name is John and I am 30 years old.

Function.prototype.myBind=function(context,...args){
    if(!context)
    return context;
    if(typeof context!=='object')
    return context;
    context.fn=this;
    return function(...args2){
       return context.fn(...args,...args2);
    }
}
const boundGreet=o1.greet.myBind(o2);
boundGreet() // Hello, my name is John and I am 30 years old.
