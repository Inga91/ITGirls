let arr = [];
for (let i = 0; i < 3; i++)   {
let mas = prompt();
    if (typeof(mas) == Number)
    arr.push(mas);// записать значения в массив
    else
    break;
}
    for(var i = 0; i<3; i++) document.write(arr[i]+" ");// вывести значения массива на экран
