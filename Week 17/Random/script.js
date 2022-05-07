let now = new Date();


function random() {

    let arr = [];
    let sum = 0;
    let mul = 1;
 
    for (let i=0; i < 10; i++)
    {
        arr[i] = Math.round((Math.random()*20 - 10));       
        sum += arr[i];
        mul *= arr[i];

    }
    avg = sum / arr.length;

    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max =  Math.max(max, arr[i]);
        min =  Math.min(min, arr[i]);
}
 
 alert (`*Сгенерировали: ${arr}*

    *Минимальное: ${min}*
    
    *Максимальное: ${max}*
    
    *Среднее арифметическое: ${avg}*
    
    *Сумма чисел: ${sum}*
    
    *Произведение чисел: ${mul}*`)

}
