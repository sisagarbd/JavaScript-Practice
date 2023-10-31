console.log("before Error!");

try {
    test();
}catch(err){
    console.log(err.message);
    console.log(err.name);

}

console.log("After Error!")