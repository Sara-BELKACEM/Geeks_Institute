const form = document.getElementById('nameForm');
const output = document.getElementById('jsonOutput');

form.addEventListener('submit', function(event) {
    event.preventDefault();  
    

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();

    const data = {
        firstName,
        lastName
    };

    const jsonString = JSON.stringify(data, null, 2);
    output.textContent = jsonString;
});