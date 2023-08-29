var emailInput = document.getElementById("emailInput");
var errorSpan = document.getElementById("errorSpan")
var btn = document.querySelector('.button');
var nameInput = document.getElementById("nameInput")

function validateEmail(){
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorSpan.innerHTML = "Please entre a valid Email!!"
        return false;
    }
    errorSpan.innerHTML = "";
}


document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.button');
  btn.addEventListener('click', function () {
    alert("Form is submitted")    
  });
 
});