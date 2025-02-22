function validateForm() {
    let name = document.getElementById("name").value;
    // let email = document.getElementById("email").value;
    // let message = document.getElementById("message").value;

    

    if (isNaN(name)) {
       console.log('good')
       return true
    }
    else{
        alert("Numbers are not allowed");
        return false;
    }
    
}
