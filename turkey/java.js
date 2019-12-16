function ready() {
    let turkeys = [];
       turkeys[0] = document.createElement('div');
       turkeys[0].className = "hah";
       turkeys[0].innerHTML = '<input type="image" src="turkey.png" class="turkey">';
    turkey.onclick = function() {
       console.log("Clicked");
       for (let i = 0; i <= turkeys.length; i++) {
        turkeys[i] = document.createElement('div');
        turkeys[i].className = "hah";
        turkeys[i].innerHTML = '<input type="image" src="turkey.png" class="turkey">';
           firsttext.append(turkeys[i]);
           
       };
    };
}




document.addEventListener("DOMContentLoaded", ready);