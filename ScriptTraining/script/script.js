function assert(a, b){
    if (a==b)console.log(`${a} OK`);
    else console.log(`${a} не равно ${b}`);
}

function search(val, arr){
    for(let i in arr) if (val == arr[i]) return true
    return false
}

function divToDigits(num){
    let digits = [];
    while (num>0){
        digits.push(num%10);
        num = Math.floor(num/10);
    }
    return digits.reverse();
}

function unique(arr) {
  return new Set(arr)
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O
