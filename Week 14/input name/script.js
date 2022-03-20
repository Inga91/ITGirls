
function del() {
    document.getElementsByTagName('input')[0].value = "6";
}

let a = +document.getElementsByTagName('input')[0].value;
let b = +document.getElementsByTagName('input')[1].value;
console.log (a);

console.log (typeof(a));
console.log (typeof(b));
function sub() {
    
    let sum = a + b; 
    
    console.log (sum);
}