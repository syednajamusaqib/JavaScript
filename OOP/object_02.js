function object(name, age){
    this.name = name;
    this.age = age;
}

// Can we add our methods into function's protoype

object.prototype.increment = function(){
    this.age++;
}

const man = new object("Najam",19);
const man2 =  new object("Najam",22);

man.increment();

console.log(man.age);