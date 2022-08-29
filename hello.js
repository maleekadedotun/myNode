function findingMeaning() {
    return 42;
}
console.log(findingMeaning());

const mission = process.argv[2]
if (mission == "learn") {
    console.log("Time to write some node code!");
}
else{
    console.log(`Is ${mission} is really more fun?`);
}
// Object.assign();
