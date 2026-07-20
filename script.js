document.getElementById("form").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;

    if (name == "" || mobile == "" || email == "" || city == "") {
        alert("Please fill all fields.");
    } else {
        alert("Registration Successful!");

        document.getElementById("message").innerHTML =
            "Name: " + name + "<br>" +
            "Mobile: " + mobile + "<br>" +
            "Email: " + email + "<br>" +
            "City: " + city;
    }

});