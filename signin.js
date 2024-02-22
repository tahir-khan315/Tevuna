const signinBtn = document.getElementById("signinbtn")
const signinEmail = document.querySelector("#signin_email")
const signinPassword = document.querySelector("#signin_password")
const signinForm = document.querySelector("#signin_form")

signinForm.addEventListener("submit", (event) => {
    let email = event.target.email.value
    let password = event.target.password.value
    let checkStatus = 0
    let userData = JSON.parse(localStorage.getItem("userDetails"))
    for(let ele of userData) {
        if(ele.email === email && ele.password == password) {
            checkStatus = 1
            break
        } 
        if(checkStatus == 1 ) {
            window.location.href = "./loginsuccess.html"
        }
        else {
            alert("Login details are incorrect")
            event.preventDefault()
        }   
    }
})

