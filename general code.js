// 4.126.1
for (let i = 10; i >= 0; i--) alert(i);

// 4.126.2
let product = 1;
for (let i = 2; i < 21; i++) {
    product *= i;
}
alert(product);


// 5.3
function GetArrayMean(a) {
    let runSum = 0;
    for (let i in a) {
        runSum += a[i];
    }
    return runSum/a.length;
}
alert(GetArrayMean([4,5,7,2]));

// 5.5
function GetRandomBetween(a,b) {
    return a + Math.random()*(b-a);
}
GetRandomBetween(1,10);

// 5.8
function GetNumOccurencesOfCharacter(str, char) {
    return (str.search(char)===-1) ? 0 : str.match(new RegExp(char,"g")).length;
}
console.log(GetNumOccurencesOfCharacter("The quick brown fox jumps over the lazy dog",'e'));




