function ready () {
    up.onclick = function() {
        this.classList.add("hide");
        down.classList.remove("hide");

    }

    down.onclick = function() {
        this.classList.add("hide");
        up.classList.remove("hide");
    }
}



document.addEventListener("DOMContentLoaded", ready);