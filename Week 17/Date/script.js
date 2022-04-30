let now = new Date();


function formatDate() {
    let date = new Date(document.getElementById("time").value);
    console.log(typeof(date));
    
    let dif = now - date;
    let year = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    let strMonth = month.toString();
    let dateDate = date.getDate().toString();
    console.log(now);
    console.log(date);
    console.log(dif);

    if (month < 10) {
        strMonth = "0" + strMonth[0];
    }
    if (dateDate < 10) {
        dateDate = "0" + dateDate[0];
    }

    if (dif >= 0 && dif < 1000 ) {
        alert("Прямо сейчас");
    }
    else if (dif > 1000 && dif < 60 * 1000) {
        alert(`${Math.floor(dif/1000)} секунд назад`);
    }
    else if (dif > 60 * 1000 && dif < 60 * 60 * 1000) {
        alert(`${Math.floor(dif/60000)} минут назад`);
    }
    else {
        alert(`${dateDate}.${strMonth}.${year.slice(-2)} ${date.getHours()}:${date.getMinutes()}` );
    }}
