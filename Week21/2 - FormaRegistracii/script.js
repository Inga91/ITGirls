postButton.onclick = function (event) {
    event.preventDefault();
    let email = document.getElementById("email1");
    let email2 = document.getElementById("email2");
    let password = document.getElementById("password");
    let name = document.getElementById("name");
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let errors = [];
    document.getElementById("errorMessageEmail").textContent = "";
    document.getElementById("errorMessageEmail2").textContent = "";
    document.getElementById("errorMessagePassword").textContent = "";
    document.getElementById("errorMessageName").textContent = "";
    document.getElementById("errorMessageDate").textContent = "";
    document.getElementById("errorMessageSex").textContent = "";

    if (email.value == "") {
        document.getElementById("errorMessageEmail").textContent += "Введите адрес электронной почты.";
    }
    else if (ValidateEmail(email))
            {if (email2.value == "") {
                document.getElementById("errorMessageEmail2").textContent += "Подтвердите адрес электронной почты.";
            } 
            else if (email2.value != email.value) {
                document.getElementById("errorMessageEmail2").textContent += "Адреса электронной почты не совпадают, проверьте еще раз";
            }}
    else {
        document.getElementById("errorMessageEmail").textContent += "Ваш адрес электронной почты введен неверно!";
        }

    if (password.value == "") {
        document.getElementById("errorMessagePassword").textContent += "Введите пароль.";
    }
    else if (password.value.length < 6) {
        document.getElementById("errorMessagePassword").textContent += "Пароль слишком короткий.";
    }

    if (name.value == "") {
        document.getElementById("errorMessageName").textContent += "Укажите имя для своего профиля.";
    }
    else {
        if (!ValidateName(name)) {
            document.getElementById("errorMessageName").textContent += "Укажите корректное имя!";
        }
    }

    if (day.value == "") {
        errors.push ("Укажите день месяца.")
    }
    else if (day.value > 31 || day.value < 1) 
    {
        errors.push ("Укажите действительный день месяца.")
    }

    if (month.value == "Месяц") {
        errors.push ("Укажите месяц.");
    }
    
    if (year.value == "") {
        errors.push ("Укажите год.");
    }
    else if (year.value > 2022 || year.value < 1922) 
    {
        errors.push ("Укажите действительный год рождения.");
    }
    document.getElementById("errorMessageDate").innerText += errors.join('\n');

    if (document.querySelector("input[name=sex]:checked") == null) { 
        
        document.getElementById("errorMessageSex").textContent += "Укажите пол.";
        
    }

    console.log(document.querySelector("input[name=sex]:checked").value);

    if (document.getElementById("errorMessageEmail").textContent == "" &&
    document.getElementById("errorMessageEmail2").textContent == "" &&
    document.getElementById("errorMessagePassword").textContent == "" &&
    document.getElementById("errorMessageName").textContent == "" &&
    document.getElementById("errorMessageDate").textContent == "" &&
    document.getElementById("errorMessageSex").textContent == "")
    {
        let user = {
            email: email1.value,
            password: password.value,
            name: name.value,
            day: day.value,
            month: month.value,
            year: year.value,
            sex: document.querySelector("input[name=sex]:checked").value
        }
        fetch("https://httpbin.org/post",
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Cintent-Type': 'application/json; charset=utf-8'
                },
            })
            .then(response => response.json())
            .then(user => {
                console.log(user);
            })
            .catch(error => console.log(error));
        
    }
}

function ValidateEmail(emailField) {
    let mailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailField.value.match(mailFormat)) {
        return true;
    }
    else {
        return false;
    }
}
function ValidateName(nameField) {
    let nameFormat = /^[A-Za-z]+$/;
    if (nameField.value.match(nameFormat)) {
        return true;
    }
    else {
        return false;
    }
}