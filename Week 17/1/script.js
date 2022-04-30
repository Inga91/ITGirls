
function save() {
    let info = document.getElementById("data").value;
    let curInfo = info.trim();
    let lowInfo = curInfo.toLowerCase();
    let array = lowInfo.split(" "); 
    let lastName = array[0];
    let i = 1;
    let name;
    for (i; i < array.length; i++) {
    if (array[i] != "") {
        name = array[i];
        break;
    }}
    let patr = array[array.length-1];
    lastName = lastName[0].toUpperCase() + lastName.slice(1);
    name = name[0].toUpperCase() + name.slice(1);
    patr = patr[0].toUpperCase() + patr.slice(1);
    document.getElementById("lastname").innerText = lastName;
    document.getElementById("name").innerText = name;
    document.getElementById("patronymic").innerText = patr;
}