const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", validateForm);

function validateForm(event){
  event.preventDefault();

  const firstName = document.querySelector("#firstName");
  const lastNameError = document.querySelector("#lastNameError");
  const lastNameVal = lastName.value;


  if (checkInputLength(lastNameVal) === true){
    lastNameError.style.display = "none";
  }else{
    lastNameError.style.display = "block";
  }

  function checkInputLength(value){
    const trimmedVal = value.trim();

    if (trimmedVal.length > 0){
      return true;
    }else{
      return false;
    }
  }
  const eMail = document.querySelector("#email");
  const eMailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");


  const eMailVal = eMail.value;

  if (checkInputLength(eMailVal) === true){
      eMailError.style.display = "none";
  }else{
      eMailError.style.display = "block";
  }

  if(validateEmail(eMailVal) === true){
    invalidEmailError.style.display = "none";
  }else{
    invalidEmailError.style.display = "block";
  }
  function validateEmail(eMail){
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(eMail);
  }

  const msg = document.querySelector("#message");
  const msgError = document.querySelector("#messageError");
  const msgVal = msg.value;
  function checkLengthMessage(value){
    const trimmedVal = value.trim();

    if(trimmedVal.length >= 10){
      return true;
    }else{
      return false;
    }
  }
  if (checkLengthMessage(msgVal) === true){
    msgError.style.display = "none";
  }else{
    msgError.style.display = "block";
  }
}
