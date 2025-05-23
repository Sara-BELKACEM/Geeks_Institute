setTimeout( function(){
    alert("Hello World");
},2000);

setTimeout(function(){
const pr = document.createElement("p");
pr.textContent = "Hello World";
const con = document.getElementById("container");
con.appendChild(pr);   
},2000);

const Intrval = setInterval( function(){
const par = document.createElement("p");
par.textContent = "Hello World";
const cont = document.getElementById("container");
cont.appendChild(par);
// const clrbtn = document.getElementById("clear");
// clrbtn.addEventListener('click' , function(){
//     clearInterval(Intrval);
// });
const pars = cont.getElementsByTagName("p");
if(pars.length >= 5){
    clearInterval(Intrval)
}
}, 2000);