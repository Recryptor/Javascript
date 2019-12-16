function ready() {
    console.log("ready")
    spam.onclick = function() {
        console.log("Clicked");
        for (let i = 0; i <= 100; i++) {
            firsttext.append("Huzzah!");
        };
    };
};








document.addEventListener("DOMContentLoaded", ready);