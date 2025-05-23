document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var r = parseFloat(document.getElementById('radius').value);
    if (isNaN(r) || r <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    var volume = (4 / 3) * Math.PI * r * r * r;
    document.getElementById('volume').value = volume.toFixed(2);
});
