h1 = document.getElementsByTagName("h1")[0];
console.log(h1);
document.getElementsByTagName("p")[2].remove();
document.getElementsByTagName("h2")[0].addEventListener('click', function (){
    this.style.backgroundColor = "red";
})
document.getElementsByTagName("h3")[0].addEventListener('click', function (){
    this.style.display = "none";
})
document.getElementById("bold").addEventListener('click', function() { 
let allp = document.getElementsByTagName("p")
for (let p of allp){
    p.style.fontWeight = "bold";
}});
document.getElementsByTagName("h1")[0].addEventListener('mouseover', function(){
    this.style.fontSize = Math.floor(Math.random() * 101) + "px";
});

