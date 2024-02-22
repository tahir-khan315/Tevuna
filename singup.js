// Form
const signUpBtn = document.getElementById("signupbtn")
const nameField = document.getElementById("name-field")
const emailField = document.getElementById("email")
const passwordField = document.getElementById("password")
const formTitle = document.getElementById("title")
const form = document.querySelector("#form")
// const displayDataContainer = document.querySelector("#displayData")

form.addEventListener('submit', (event) => {
  let name = event.target.name.value
  let email = event.target.email.value
  let password = event.target.password.value
  let checkStatus = 0
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? []
  for(let item of userData) {
    if(item.email === email) {
      checkStatus = 1
      break
    }
  }
  if(checkStatus == 1) {
    alert("Sorry email already exist")
    event.preventDefault()
    event.target.reset()
  }
  else {
    userData.push({
      'name' : name,
      'email' : email,
      'password' : password
    })
    event.target.reset()
    localStorage.setItem('userDetails', JSON.stringify(userData))
  }
  displayData()
})

let displayData = () => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? []
  let finalData = ''
  userData.forEach((element, i) => {
    finalData += `<div class="items">
    <span onclick = 'removeData(${i})'>&times</span>
    <h1>Name: <strong>${element.name}</strong></h1>
    <h1>Email: <strong>${element.email}</strong></h1>
    <h1>Password: <strong>${element.password}</strong></h1>
  </div>`
  })
  displayDataContainer.innerHTML = finalData
}
displayData()

let removeData= (index) => {
  let userData = JSON.parse(localStorage.getItem("userDetails")) ?? []
  userData.splice(index, 1)
  localStorage.setItem('userDetails', JSON.stringify(userData))
  displayData( )
}


