function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// form entries
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const numberOfTournaments = document.getElementById("quantity");
let firstCheck = Boolean(false);
let secondCheck = Boolean(false);


// location identification
const numberOfLocations = 6;
for (let i =0; i < numberOfLocations; i++) {
  if (document.getElementById("location") + "${numberOfLocations}".checked) {
    let location = document.getElementById("location") + "${numberOfLocations}".value;
  }

}


// checkbox checking
function validate1() {
  if (document.getElementById("checkbox1").checked) {
    firstCheck = true;
  }
  else {
    firstCheck = false;
  }

  return firstCheck;
}

function validate2() {
  if (document.getElementById("checkbox2").checked) {
    firstCheck = true;
  }
  else {
    firstCheck = false;
  }

  return secondCheck;
}


// informations wrapping
let informationsList = {
  firstName : firstName,
  lastName : lastName,
  email : email,
  birthDate : birthDate,
  numberOfTournaments : numberOfTournaments,
  location : location,
  firstCheck : firstCheck,
  secondCheck : secondCheck
}


// informations checking

let formError = Boolean(false);

if ("" !== firstName) {
  // validated -> green
}
else {
    // not validated -> red + error
    formError = true;
}

if (lastName !== "") {
  // validated -> green
}
else {
    // not validated -> red + error
    FormError = true;
}

// email validation function
function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

if (emailIsValid(email) === true){
  //validated -> green
}
else {
  // not validated -> red
  formError = true
}

// birthDate validation
const birthDay = parseInt(birthDate.toString().slice(2));
const birthMonth = parseInt(birthDate.toString().slice(3,5));
const birthYear = parseInt(birthDate.toString().slice(6,8));

quintilMonthes = [1,3,5,7,8,10,12]
sextilMonthes = [4,6,9,11]

if (birthYear > 1900) {
  if (birthMonth < 13) {
    if (birthDay < 32) {
      if (birthMonth === 2) {
        if (birthDay <= 28) {
          // validated -> green
        }
        else {
          if (birthDay === 29 && Number.isInteger(birthYear/4)){

          }
          else {
            //error -> red
            formError = false;
          }
        }
      }
      if (quintilMonthes.include(birthMonth)) {
        if (birthDay <= 31) {
          // validated -> green
        }
        else {
          // not validated  -> red
          formError = true
        }
      }
      if (sextilMonthes.includes(birthMonth)) {
        if (birthDay <= 30) {
          //validated -> green
        }
        else {
          // not validated  -> red
          formError = true
        }
      }
    } else {
      // not validated  -> red
      formError = true
    }
  } else {
    // not validated  -> red
    formError = true
  }
}
else {
  // not validated  -> red
  formError = true
}

// number of tournaments checking
if ("" !== numberOfTournaments) {
  // validated -> green
}
else {
  // not validated -> red + error
  formError = true;
}

// location checking
for (let i =0; i < numberOfLocations; i++) {
  if (document.getElementById("location") + "${numberOfLocations}".checked) {
    // validated -> green
    break
  }
  else {
    // not validated -> red + error
    formError = true
  }

}

if (document.getElementsByName(checkbox1).checked ) {
  // validated -> green
}
else {
  // not validated -> red + error
}


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// success launch message
function validate(e) {
  if (formError === false) {

  }
  else {
    e.preventDefault();
  }
}

