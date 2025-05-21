let divc = document.getElementById("container");
console.log(divc);
document.querySelectorAll(".list")[0].children[1].textContent= "Richard";
document.querySelectorAll(".list")[1].children[1].remove();
let lists = document.querySelectorAll(".list");
lists.forEach (list => {
    list.children[0].textContent = "Sara"
});

document.querySelectorAll(".list").forEach(ul => ul.classList.add("student_list"));
document.querySelectorAll(".list")[0].classList.add("university", "attendance");

document.getElementById("container").style.cssText = "background: lightblue ; padding : 20";
document.querySelectorAll("li")[4].style.display = "none";
document.querySelectorAll("li")[1].style.border = "1px solid black";
document.body.style.fontSize = "19px";

if(document.getElementById.style.backgroundColor === "lightblue"){
    let names = document.querySelectorAll("li");
    alert(`Hello ${names[0].textContent} and ${names[1].textContent}`);    
}
