function ToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// displays the games under games.html
var img_number = 0; //first element in arrays have an index of 0
imgShow(img_number); //calls function and passes in 0

function changeImg(x) {
  imgShow(img_number += x);
}

// takes an integer x passed in through the nav_bullet and number will = x
function currentImg(x) {
  imgShow(img_number = x);
}


function imgShow(x) {
  let i;
  let imgs_array = document.getElementsByClassName("game");
  let nav_bullet_array = document.getElementsByClassName("nav_bullet");
  if (x > imgs_array.length-1) {
    img_number = 0
      }    //last img goes to first img in the array
  if (x < 0) {
    img_number = imgs_array.length-1;
    }     //first img goes to last img in the array
  for (i = 0; i < imgs_array.length; i++) { // sets all display property to none
    imgs_array[i].style.display = "none";  
  }
  for (i = 0; i < nav_bullet_array.length; i++) {
    nav_bullet_array[i].className = nav_bullet_array[i].className.replace("show", ""); //removes the active class of all elements in nav_bullet array
  }
  imgs_array[img_number].style.display = "flex";  //shows the image 
  nav_bullet_array[img_number].className += " show"; //sets the respective bullet of the img to show 
}

// Chatbot conversation
function openChat() {
  document.getElementById("conversation").style.display = "block";
}

function closeChat() {
  document.getElementById("conversation").style.display = "none";
}

// sign in form
function signInForm(){
    var Username = document.getElementById("username").value; //gets username
    var password = document.getElementById("password").value; //gets password 
    let strRegex = new RegExp(/^[a-z0-9]+$/i);  // alphanumeric test for letters a -z and numbers 0-9 and is case insensitive
    let result = strRegex.test(password)
    let result1 = strRegex.test(Username)
    if (password.length < 8){
      alert("Incorrect password or username.");
    }
    else if (!result){ //false will be produced a character is not alphanumeric hence not false.
      alert("Incorrect password or username.");
    }
    else if (!result1){
      alert("Incorrect password or username.");
    }
    else{
      window.location.pathname("/index.html");
    }

}
