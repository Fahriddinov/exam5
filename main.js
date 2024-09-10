let body = document.querySelector('body');
let button = document.querySelector('.btn1');


body.style.display = 'grid';
body.style.placeItems = 'center';
body.style.marginTop = '150px';

modmeId.style.width = '300px';
modmeId.style.height = '30px';
modmeId.style.margin = '10px';
modmeId.style.padding = '10px';
modmeId.style.background = 'lightgrey';
modmeId.style.border = 'none';
modmeId.style.borderRadius = '10px';

password.style.width = '300px';
password.style.height = '30px';
password.style.margin = '10px';
password.style.padding = '10px';
password.style.background = 'lightgrey';
password.style.border = 'none';
password.style.borderRadius = '10px';

button.style.fontSize = '20px';
button.style.width = '320px';
button.style.height = '50px';
button.style.margin = '10px';
button.style.padding = '10px';
button.style.background = 'red';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '10px';

alert(`sizning modemId: 123456
parol: 1221`);

function login() {
    const modmeId = document.getElementById('modmeId').value;
    const password = document.getElementById('password').value;
    

    const correctModmeId = '123456';
    const correctPassword = '1221';
    
    if (modmeId === correctModmeId && password === correctPassword) {
        ans.style.display = 'none';
        button.style.marginBottom = '100px';
        button.addEventListener('click', () => {
            ques.style.display = 'block';
            add.style.display = 'block';
        })
        alert('Siz saytga kirdingiz!');
    } else {
        ans.style.display = 'block';
        button.style.marginBottom = '10px';
    }

    console.log(modmeId, password);
}


let ans = document.querySelector('.ans');
ans.style.display = 'none';
ans.style.marginBottom = '100px';

let ques = document.querySelector('.ques');
ques.style.display = 'none';

let add = document.querySelector('.add');
add.style.display = 'none';
add.style.fontSize = '20px';
add.style.width = '320px';
add.style.height = '50px';
add.style.margin = '10px';
add.style.padding = '10px';
add.style.background = 'red';
add.style.color = 'white';
add.style.border = 'none';
add.style.borderRadius = '10px';


let form = document.querySelector(".form");
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let box = document.querySelector(".box-text");
let uy = document.querySelector(".uy");

form.style.display = 'none';
input.style.width = '220px';
input.style.height = '30px';
input.style.margin = '10px';
input.style.padding = '10px';
input.style.background = 'lightgrey';
input.style.border = 'none';
input.style.borderRadius = '10px';
btn.style.fontSize = '20px';
btn.style.width = '50px';
btn.style.height = '50px';
btn.style.margin = '10px';
btn.style.padding = '10px';
btn.style.background = 'red';
btn.style.color = 'white';
btn.style.border = 'none';
btn.style.borderRadius = '10px';

uy.append(box);


form.addEventListener("submit", (e) => {
    let p = document.createElement("p");
    e.preventDefault();

    p.innerText = input.value;
    box.appendChild(p);
    input.value = "";

    p.addEventListener("click", () => {
        p.remove()
    })

    p.style.fontSize = "20px";
    p.style.textAlign = "center";
})

add.addEventListener ('click', () => {
    form.style.display = 'block';
})