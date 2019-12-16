function ready() {
    console.log("ready")
    let huzzah = [];
    for (let i = 0; i <= 100; i++) {
        huzzah[i] = document.createElement('div');
    }
        for (i = 0; i < huzzah.length; i++) {
            console.log("this exists")
            huzzah[i].innerHTML = '<button id="delete">Huzzah</button>';
        }
    }
    huzzah.onclick = function() {
        
    }






document.addEventListener("DOMContentLoaded", ready);