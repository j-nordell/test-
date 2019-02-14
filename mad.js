const submitButton =document.getElementById("submit")
const pinInput = document.getElementById("pin")
const dogRadio = document.getElementById("dog").checked
const catRadio = document.getElementById("cat").checked
const otherRadio= document.getElementById("other").checked
const otherInput = document.getElementById("otherinput")
const div = document.getElementById("message")

function validInput() {

    alert("Your input was valid");
  }


  

function myFunction() {
    // Get the checkbox
    var checkBox = document.querySelector(".checkbox");
    // Get the output text
    var email = document.querySelector(".email");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      email.style.display = "block";
    } else {
      email.style.display = "none";
    }
  }

  
  if(dogRadio === true ||catRadio===true){

otherInput.value = ""

  }
