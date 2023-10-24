var a = 1;
let b = 2;
const c = 3;



console.log(`Global Scope: ` , a, b, c);

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    const d = 11;
    console.log(`Local Scope: ` , a, b, c);
}

test();

console.log(`Global Scope: `, a, b, c, d);