function myMove() {
    const elem = document.getElementById("animate");
    let pos = 0;
    const containerWidth = 400;
    const animateWidth = 50;
    const maxRight = containerWidth - animateWidth;

    const id = setInterval(frame, 1);
    function frame() {
        if (pos >= maxRight) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
