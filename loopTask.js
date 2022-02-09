console.log("example one");
for (let i = 1; i < 10; i++) {
    let line = "* ";
    for (let j = 1; j < i; j++) {

        line += "* ";
    }
    console.log(line)
}
console.log("----------------------------");
console.log("example two");
let totalLine = 10;
for (let a = 0; a < totalLine; a++) {
    let lineData = "";
    for (let b = 0; b < totalLine; b++) {
        lineData += "* "
    }
    console.log(lineData);
}