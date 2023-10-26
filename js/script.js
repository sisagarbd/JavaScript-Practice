class Person {
    constructor(fname, lname, birthday){
        this.firstname = fname;
        this.lastname = lname;
        this.dob = birthday;
    }

    calculateAge(){
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
}
}


let person1 = new Person("saiful", "Islam", "08-21-1998");
console.log(person1.calculateAge()); // console