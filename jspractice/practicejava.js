function ready() {
    console.log("Page ready");
    let favs = document.forms.favs;
    let colorEl = favs.elements.color;

    console.log(colorEl.value);

    colorEl.onchange = function() {
        let el = document.createElement('p');
        el.innerHTML = "You typed " + colorEl.value;
    today.append(el);
    };
    go.onclick = function() {
        alert("Please don't go");
    }
}












document.addEventListener("DOMContentLoaded", ready);

// cs.style.background = "Ff0000";
// cs.style.textAlign = "center";
//cs.classList.add("highlighted");
// cs.classList.remove("normal");

// cs.innerHTML = "banana";

// let elem = document.createElement('div');
// elem.innerHTML = "<p>This is new</p>";
// elem.className = "special interesting";
// cs.append(elem);
// cs.prepend(elem);

// let x= 0;
// let fruits = ["Apple", "Banana", "Watermelon"];

//while (x < fruits.length) {
//    if (fruits[x] === "Banana") {
//        list.append("BBBBBBB");
//    }   else {
//        list.append(fruits[x]);
//    }
//    x++;
//}

// setTimeout(() => {
//    watermelon.innerHTML = "<p><strong>" + fruit + "</strong></p>";
//    console.log("Hi");
//}, 2000);

// let addFruit = function(fruit) {
//     watermelon.append(fruit);
// };

// addFruit("strawberry");