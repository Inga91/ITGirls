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
       // console.log(`${arr[i]}; sum = ${sum}; mul = ${mul} `);
    }
    avg = sum / arr.length;
  //  console.log (`avg = ${avg}`);
    let max = arr[0];
    let min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        max =  Math.max(max, arr[i]);
        min =  Math.min(min, arr[i]);
}
  //  console.log(max);
  //  console.log(min);
  //  console.log(arr);

 alert (`*Сгенерировали: ${arr}*

    *Минимальное: ${min}*
    
    *Максимальное: ${max}*
    
    *Среднее арифметическое: ${avg}*
    
    *Сумма чисел: ${sum}*
    
    *Произведение чисел: ${mul}*`)

}
