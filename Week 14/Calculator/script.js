
add.onclick = function () {
    let first = +document.getElementById('first-number').value;
    let second = +document.getElementById('second-number').value;
    document.getElementById('answer').value = first + second;
};
sub.onclick = function () {
    let first = +document.getElementById('first-number').value;
    let second = +document.getElementById('second-number').value;
    document.getElementById('answer').value = first - second;
};
mul.onclick = function () {
    let first = +document.getElementById('first-number').value;
    let second = +document.getElementById('second-number').value;
    document.getElementById('answer').value = first * second;
}
div.onclick = function () {
    let first = +document.getElementById('first-number').value;
    let second = +document.getElementById('second-number').value;
    document.getElementById('answer').value = first / second;
};