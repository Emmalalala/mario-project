let monsters = document.monsters;
let goombas = monsters.goombas;
let cheepCheeps = monsters.cheepCheeps;
let bombOmbs = monsters.bombOmbs;
monsters.addEventListener("submit", function(e){
    e.preventDefault();
        let g = goombas.value * 5;
        let c = cheepCheeps.value * 11;
        let b = bombOmbs.value * 7;
        let total = g + c + b;
    let p = document.createElement("p");
    p.textContent = `Your total is: ${total}`;
    let div = document.getElementById("answer");
    div.prepend(p);
});
let contact = document.getElementById("contact");
let name = document.createElement("span");
name.textContent = "Super Mario";
contact.prepend(name);

let span2 = document.createElement("span");
span2.textContent = "Super Mario World";
contact.appendChild(span2);

let span1 = document.createElement("span");
span1.textContent = "1964 Nintendo Blv.";
contact.appendChild(span1);

let span3 = document.createElement("span");
span3.textContent = "super_mario@peachypacific.net";
contact.appendChild(span3);




