function ready() {
    let huzzah = [];
    for (let i = 0; i <= 100; i++) {
       huzzah[i] = document.createElement('div');
       huzzah[i].className = "hah";
       huzzah[i].innerHTML = '<button id="delete">Huzzah</button>';
    }
    for (i = 0; i < huzzah.length; i++) {
       console.log("this exists");
    }
    spam.onclick = function() {
       console.log("Clicked");
       for (let i = 0; i <= 100; i++) {
           
           firsttext.append(huzzah[i]);
           
       };
    };

        for (i = 0; i < huzzah.length; i++) {
            console.log("this exists");
            huzzah[i].onclick = function() {
                huzzah.pop();
                firsttext.innerHTML = "<p></p>"
                for (let i = 0; i <= huzzah.length; i++) {
           
                    firsttext.append(huzzah[i]);
                    
                };
            }   
        }

}


document.addEventListener("DOMContentLoaded", ready);