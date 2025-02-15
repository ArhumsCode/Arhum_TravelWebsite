const itemForm = document.getElementById('itemForm');

itemForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let firstPassword = event.target.password.value;
    let secondPassword = event.target.confirmPassword.value;
    if (firstPassword == secondPassword && (firstPassword.length > 7)) {
        console.log(`Na'm ha dha maktaboon! Your password is: ${firstPassword}`);
    } else {
        alert("Error! Passwords do not match! Try again!");
        
    }

});