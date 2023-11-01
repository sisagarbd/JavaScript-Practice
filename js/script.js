class Person {
    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }
    greating(){
        console.log(`hello ${this.firstname} ${this.lastname}!`);
    }

    static test(){ 
        console.log("I am static!");
    }
}

let person1 = new Person("saiful", "islam");

console.log(person1.greating());
console.log(Person.test()); 
console.log("before Error!");

try {
    test();
}catch(err){
    console.log(err.message);
    console.log(err.name);

}

console.log("After Error!")
