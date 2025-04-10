const o1={
    name:'Khushi',
    age:"25",
    greet:function(a,b,c){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. 
            a=${a} b=${b} c=${c}` )
    }
}

const o2={
    name:'John',
    age:"30"
}
o1.greet.call(o2,'a','b',123) // Hello, my name is John and I am 30 years old. a=a b=b c=123

Function.prototype.myCall=function(context,...args)
{
	if(!context) return context;
    if(typeof context!=='object')
    return context;

    context.fn=this;

    return context.fn(...args)

}
const boundGreet=o1.greet.myCall(o2,'a','b',123);