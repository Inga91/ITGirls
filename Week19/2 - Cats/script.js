class Cat {
    constructor(nickname, name = "", tel = "", specie = "", food = "", sex = '') {
        this.nickname = nickname; 
        this.name = name; 
        this.tel = tel; 
        this.specie = specie; 
        this.food = food;
        this.sex = sex;
    }
  }
function sex1() {
    const genders = document.querySelectorAll('input[name="sex"]');
    let radiobuttonChecked;
    for (const g of genders) {
      if (g.checked) {
        radiobuttonChecked = g.value;
      }
    }
    return radiobuttonChecked;
}


function food1() {
    let checkboxes = document.getElementsByClassName('checkbox');
    let checkboxesChecked = []; 
    for (let index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value); 
        }
        }
        return checkboxesChecked; 
}

function save() {
    let nickname = document.getElementById("nickname").value;
    let name = document.getElementById("name").value;
    let tel = document.getElementById("tel").value;
    let specie = document.getElementById("specie").value;
    
    let food = food1();
    let sex = sex1();

    let cat = new Cat(nickname, name, tel, specie, food, sex);
    console.log (cat);
    /*console.log (cat.nickname);
    console.log (cat.name);
    console.log (cat.tel);
    console.log (cat.specie);
    console.log (cat.food);
    console.log (cat.sex);*/
    
}

