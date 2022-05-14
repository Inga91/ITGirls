
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
}

function editEvent(event){
    let dataValue = event.target.value;
    let re = /[^\d]/gi;
    event.target.value = dataValue.replace(re, "");
}
document.getElementById("idField").addEventListener("input", function (event) {
    editEvent(event);
});*/
/*
class Article {
    constructor(name) {
      this.name = name;
    }}

let member = new Article ("Ira");
console.log(typeof member);

class Article {
    constructor(name) {
      this.name = name;
    }}

let member = new Article ("Ira");*/

let user = {
    
    name: 'Мария Иванова',
    age: '12'
}
//обращаться к свойствам и методам наших объектов можно через точку

let city = user.corp;
console.log(user);
/*class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static createTodays() {
      // помним, что this = Article
      return new this("Сегодняшний дайджест", new Date());
    }}
  
  let article = Article.createTodays();
  
  alert( article.title ); // Сегодняшний дайджест*/

  let name1 = document.getElementById('name'); // Получаем input
  let regex = /[^0-9]/g; // регулярка только цифры
  name1.oninput = function(){
      this.value = this.value.replace(regex, '');
    }