
let messages = [];
let k;

function addNewComment(){
    let comment = document.getElementById("comment").value;
    messages.push(checkSpam(comment));
    document.getElementById("comment").value = "";
    update();
}
function update() {
    let optionString = "";
    for (let m of messages) {
        optionString += `<div><p>${m}</p><hr></div>`;
    }
        document.getElementById("chat").innerHTML = optionString;
}
document.addEventListener("DOMContentLoaded", function () {
    update();
})

function checkSpam (k) {
   
    /*let updateMessage = k.replace(/viagra/ig, "***");
    updateMessage = updateMessage.replace(/xxx/ig, "***");*/
    let updateMessage = k.replace(/xxx|viagra/gi, "***");
    return updateMessage;
}
/*function ValidateNum() {
    let num = /^\d{1,}$/;
    let comment = document.getElementById("num").value;
    console.log (comment);
    if (comment.match(mailFormat)) {
        return true;
    }
    else {
        alert("Это не число");
        return false;
    }
}*/

function editEvent(event){
    let dataValue = event.target.value;
    let re = /[^\d]/gi;
    event.target.value = dataValue.replace(re, "");
}
document.getElementById("idField").addEventListener("input", function (event) {
    editEvent(event);
});