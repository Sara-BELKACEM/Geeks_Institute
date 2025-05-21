document.getElementById("navbar").setAttribute("id" , "socialNetworkNavigation");

let newli = document.createElement("li");

let txtnode = document.createTextNode("Logout");

newli.appendChild(txtnode);

let ul = document.querySelectorAll("#socialNetworkNavigation ul")
ul.appendChild(newli)
console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);



