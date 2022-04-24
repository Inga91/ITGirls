function check() {
    let email = document.getElementById("email1");
    let email2 = document.getElementById("email2");
    let password = document.getElementById("password");
    let name = document.getElementById("name");
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");

    document.getElementById("errorMessageEmail").innerHTML = "";
    document.getElementById("errorMessageEmail2").innerHTML = "";
    document.getElementById("errorMessagePassword").innerHTML = "";
    document.getElementById("errorMessageName").innerHTML = "";
    document.getElementById("errorMessageDate").innerHTML = "";
    document.getElementById("errorMessageSex").innerHTML = "";

    if (email.value == "") {
        document.getElementById("errorMessageEmail").innerHTML += "Введите адрес электронной почты.<br>";
    }
    else if (email2.value == "") {
        document.getElementById("errorMessageEmail2").innerHTML += "Подтвердите адрес электронной почты.<br>";
    } 
    else if (email2.value != email.value) {
        document.getElementById("errorMessageEmail2").innerHTML += "Адреса электронной почты не совпадают, проверьте еще раз<br>";
    }

    if (password.value == "") {
        document.getElementById("errorMessagePassword").innerHTML += "Введите пароль.<br>";
    }
    else if (password.value.length < 6) {
        document.getElementById("errorMessagePassword").innerHTML += "Пароль слишком короткий.<br>";
    }

    if (name.value == "") {
        document.getElementById("errorMessageName").innerHTML += "Укажите имя для своего профиля.<br>";
    }

    if (day.value == "") {
        document.getElementById("errorMessageDate").innerHTML += "Укажите день месяца.<br>";
    }
    else if (day.value > 31 || day.value < 1) 
    {
        document.getElementById("errorMessageDate").innerHTML += "Укажите действительный день месяца.<br>";
    }

    if (month.value == "Месяц") {
        document.getElementById("errorMessageDate").innerHTML += "Укажите месяц.<br>";
    }
    

    if (year.value == "") {
        document.getElementById("errorMessageDate").innerHTML += "Укажите год.<br>";
    }
    else if (year.value > 2022 || year.value < 1922) 
    {
        document.getElementById("errorMessageDate").innerHTML += "Укажите действительный год рождения.<br>";
    }

    if (document.querySelector("input[name=sex]:checked") == null) { 
        
        document.getElementById("errorMessageSex").innerHTML += "Укажите пол.<br>";
        
    }

    if (document.getElementById("errorMessageEmail").innerHTML == "" &&
    document.getElementById("errorMessageEmail2").innerHTML == "" &&
    document.getElementById("errorMessagePassword").innerHTML == "" &&
    document.getElementById("errorMessageName").innerHTML == "" &&
    document.getElementById("errorMessageDate").innerHTML == "" &&
    document.getElementById("errorMessageSex").innerHTML == "")
    {
        alert ("Добро пожаловать " + name.value);
    }
}