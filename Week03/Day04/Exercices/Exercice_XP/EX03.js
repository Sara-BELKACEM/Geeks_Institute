let allBoldItems;

function getBoldItems(){
    allBoldItems = document.querySelectorAll("p strong");
}
function highlight(){
    for(let item of allBoldItems){
        item.style.color = "blue";
    }
}

function returnItemsToDefault(){
    for(let item of allBoldItems){
        item.style.color = "black"
    }
} 

getBoldItems();

let pr = document.querySelector("p");
pr.addEventListener("mouseover", highlight);
pr.addEventListener("mouseout", returnItemsToDefault);

