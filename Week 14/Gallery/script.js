//const pics = getElementsByClassName('gallery');
let x = 0;
function change (direction) {
    let f = document.getElementsByClassName('block')[x];
    f.classList.remove ("visible");
    debugger;
    if (direction == 'next') 
    {    
        x += 1;     
        if (x == 4) 
        {
            x = 0;
        }
    }
    else
    {
        x -= 1;
        if (x == -1) 
        {
            x = 3;
        }
    }
    debugger;
    let s = document.getElementsByClassName('block')[x];
    s.classList.add ("visible");
}

