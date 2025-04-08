const a={
    name:"Khushi",
    age:"25",
    print:function (){
    console.log(`${this.name} ${this.age}`)
}
}
const b={
    name:"Muskan",
    age:"21",
    print:function (){
    console.log(`${this.name} ${this.age}`)
}
}
const fn=b.print.bind(a);
fn()
