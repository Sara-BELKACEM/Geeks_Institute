let form = document.getElementsByTagName("form")[0];
console.log(form);

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let submit = document.getElementById("submit");
console.log(fname);
console.log(lname);
console.log(submit);

let namef = document.getElementsByName("firstname");
let namel = document.getElementsByName("lastname");
console.log(namef);
console.log(namel);

form.addEventListener("submit", function(event){
    event.preventDefault(); // Stop page refresh
    
    let firstname = fname.value.trim();
    let lastname =lname.value.trim();
    
    if(firstname && lastname){
        let ul = document.querySelector(".usersAnswer");
    
        let li1 = document.createElement("li");
        li1.textContent = firstname;
        ul.appendChild(li1);
    
        let li2 = document.createElement("li");
        li2.textContent = lastname;
        ul.appendChild(li2);
    }
});