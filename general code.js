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


function ReverseString(str) {
    let l = str.length;
    for (let i = 0; i <= (Math.floor(l/2)-1); i++) str = str.slice(0,i) + str.charAt(l-i-1) + str.slice(i+1,l-i-1) + str.charAt(i) + str.slice(l-i, l);
    return str;
}

