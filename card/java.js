function ready() {
    console.log("Page ready")
    
}

    card.onclick = function() {
        let i = ++i
        let x = i % 2
        switch(x) {
        
            case 0:
            card.innerHTML = '<button id="card"><img id="back" width = 100 height = 200 src="back.jpg"></button>'
            break;
            case 1:
                card.innerHTML = '<button id="card"><img id="front" width = 100 height = 200 src="front.jpg"></button>'
                
            break;
    }


}



document.addEventListener("DOMContentLoaded", ready);