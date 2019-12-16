function ready() {
    let cards = document.querySelectorAll(".card");

    for (let card of cards) {
        card.onclick = function() {
            cards.forEach(c => {
                c.classList.remove("hide");
            });
            this.classList.add("hide");
        }
    }
};

document.addEventListener("DOMContentLoaded", ready);