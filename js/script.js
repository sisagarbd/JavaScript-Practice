let person= {
    firstname : 'Fazle',
    lastname : 'Rahat',
    dob: "9-10-1995",

    fullname: function() { 
        return `${this.firstname} ${this.lastname}`;
    }
}


console.log(person.firstname);
console.log(person.fullname());












// let printEverything = function (item, i, abc) {
//     console.log(`Index: ${i} and Item: ${item})`);
//     console.log(abc);
// }


// foods.forEach(printEverything);