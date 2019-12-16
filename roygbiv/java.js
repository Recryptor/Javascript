function ready() {
    console.log("ready")
    spam.onclick = function() {
        console.log("Clicked");
        for (let i = 0; i === 10; ++i) {
            spamtext.append("Huzzah!");
        };
        
    };
};








document.addEventListener("DOMContentLoaded", ready);