let sum = 0;
let arr = [];
function sumInput() {
    let result1 = prompt('Введите число');
    let result = +result1;
    
    if (result1 === null || Number.isNaN(result) || result1 === "") {
        alert (`Сумма чисел равна ${sum}`);
        
        arr.sort(function(a, b) {
            return a - b;
        });
     
        alert (`Отсортированный массив: ${arr}`);
        
    }
    else
        {
            sum = sum + result;
            arr.push(result);
            sumInput();
        }
 
}
sumInput();
