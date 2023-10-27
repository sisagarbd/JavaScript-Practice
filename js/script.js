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