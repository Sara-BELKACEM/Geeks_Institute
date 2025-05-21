let allBooks = [
    book1 = {
    title : "Me and You",
    author : "Sara Belkacem",
    image : "url",
    alreadyRead : false
    },
    book2 ={
        title : "The meaning of life",
        author : "Sara Belkacem",
        image : "url",
        alreadyRead : true
    } ];

let section = document.querySelectorAll(".listBooks")

allBooks.forEach( book => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let img = document.createElement("img");
    
    p.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) p.style.color = "red";
    
    img.src = book.img;
    img.style.width = "100px"

    div.appendChild(p);
    div.appendChild(img);
    section.appendChild(div);
});
