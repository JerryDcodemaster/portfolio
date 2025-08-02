// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Send Mail
function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_7drt05t", "template_wzf9dif", params).then(function (res) {
        alert("Success! " + res.status);
        document.getElementById("fullName").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("message").value = "";
    });

    // const fullName = document.getElementById("fullName").value;
    // const email = document.getElementById("email_id").value;
    // const phoneNumber = document.getElementById("phone_no").value;
    // const message = document.getElementById("message").value;

    // if(fullName == "" || email == "" || phoneNumber == "" || message == "") {
    //     alert("All Inputs must be filled!")
    // } 
}