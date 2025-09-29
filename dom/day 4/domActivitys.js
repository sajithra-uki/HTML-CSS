document.getElementsById("signupform").addEventlistener("submit",
    function(e){
        e.preventDefault();
        let valid = true;

        document.querySelectorAll(".error").forEach(el => el.textContent = "");

        const username =document.getElementById("username").value.trim();
        if(username.lenght<3){
            document.getElementById("usernameError").textContent="username must be at least 3 characters.";
            valid=false;
        }

        const email =document.getElementById("email").value.trim();
        const emailPattern=/^[^]+@[^]+\.[a-z]{2,3}$/;
        if(!emailPattern.test(email)){
            document.getElementById("emailError").textContent="Enter a valid email address.";
            valid=false;

        }

        const password =document.getElementById("password").value;
        if(password.lenght<6){
            document.getElementById("passwordError").textContent="the password must be at lest 6 characters.";
            valid=false;
        }

        const conformpassword =document.getElementById("conformpassword").value;
        if(password !== conformpassword){
            document.getElementById("conformpasswordError").textContent="passwords do not match.";
            valid=false;
        }

        

        if(valid){
            alert("signup Sucessfull!");
            e.traget.submit();
        }

    });