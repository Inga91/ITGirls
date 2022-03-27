
add.onclick = function () {
    let first = +document.getElementById('first-number').value;
    let second = +document.getElementById('second-number').value;
    let operationBlock = document.getElementById('operand');
    operationBlock.innerText = "+";
    if (document.getElementById('first-number').value === "") {
        alert('Введите первое число!');
        document.getElementById('answer').value = "Ошибка" ;}
    else if (document.getElementById('second-number').value === "") {
        alert('Введите второе число!');
        document.getElementById('answer').value = "Ошибка" ;}
    else
        document.getElementById('answer').value = first + second;
    
};
sub.onclick = function () {
    let first = +document.getElementById('first-number').value;
    let second = +document.getElementById('second-number').value;
    let operationBlock = document.getElementById('operand');
    operationBlock.innerText = "-";
    if (document.getElementById('first-number').value === "") {
        alert('Введите первое число!');
        document.getElementById('answer').value = "Ошибка" ;}
    else if (document.getElementById('second-number').value === "") {
        alert('Введите второе число!');
        document.getElementById('answer').value = "Ошибка" ;}
    else
        document.getElementById('answer').value = first - second;
    
};
mul.onclick = function () {
    let first = +document.getElementById('first-number').value;
    let second = +document.getElementById('second-number').value;
    let operationBlock = document.getElementById('operand');
    operationBlock.innerText = "*";
    if (document.getElementById('first-number').value == "") {
        alert('Введите первое число!');
        document.getElementById('answer').value = "Ошибка" ;}
    else if (document.getElementById('second-number').value == "") {
        alert('Введите второе число!');
        document.getElementById('answer').value = "Ошибка" ;}
    else
        document.getElementById('answer').value = first * second;
}

div.onclick = function () {
    let first = +document.getElementById('first-number').value;
    let second = +document.getElementById('second-number').value;
    let operationBlock = document.getElementById('operand');
    operationBlock.innerText = "/";
    console.log (second);
        if (document.getElementById('first-number').value === "") {
            alert('Введите первое число!');
            document.getElementById('answer').value = "Ошибка" ;}
        else if (document.getElementById('second-number').value === "") {
            alert('Введите второе число!');
            document.getElementById('answer').value = "Ошибка" ;}
        else if (second == 0) {
                alert('На ноль делить нельзя!!!');
                document.getElementById('answer').value = "Ошибка" ;}
        else
        document.getElementById('answer').value = first / second;
};

document.getElementsByClassName('num')[0].onclick = function (e) {
    
    e.currentTarget.style.width = '100px';
};
document.getElementsByClassName('num')[1].onclick = function (e) {

    e.currentTarget.style.width = '100px';
};
