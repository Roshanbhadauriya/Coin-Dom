// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',() =>
    {
        nav.classList.add('active');
       
    }
    )
}

if(close){
    close.addEventListener('click' ,() => {
        nav.classList.remove('active')
    })
}




let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

//coina
    // Check if the paragraph value is stored in the local storage
    if (!localStorage.getItem('coins')) {
        // If not, set the initial value to 1000
        localStorage.setItem('coins', 1000);
      }
      
      // Get the paragraph element and the subtract button element
      const coinsParagraph = document.getElementById('coins');
      const subtractButton = document.getElementById('subtractButton');
      
      // Update the paragraph text with the stored value from local storage
      coinsParagraph.textContent = localStorage.getItem('coins');
      
      // Add an event listener to the subtract button
      subtractButton.addEventListener('click', function() {
        // Get the current value from the paragraph
        let currentValue = parseInt(coinsParagraph.textContent);
      
        // Subtract 1 from the current value
        currentValue--;
      
        // Update the paragraph text with the new value
        coinsParagraph.textContent = currentValue;
      
        // Store the new value in the local storage
        localStorage.setItem('coins', currentValue);
      });

      //Modal For LogIn and SignUp
       function visible() {
        document.getElementById('modalContainer').style.display = 'block';
      };
      
      function notVisible()  {
        document.getElementById('modalContainer').style.display = 'none';
      };
      
// Login Modal

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // Check if the email and password match
  if (email === "roshan@gmail.com" && password === "123") {
    // Change the HTML element to an anchor link
    var messageElement = document.getElementById("login");
    messageElement.innerHTML = "<a href='account-settings/index.html'>Account</a>";
    addlogout();
    localStorage.setItem("isLoggedIn", true);
    notVisible();
  } else {
    // // Show an error message
    // var errorElement = document.getElementById("error");
    // errorElement.innerHTML = "Invalid email or password";
    alert("invalid Username or Password!");
  }
}
function addlogout(){
  var element1 = document.getElementById("logout");
  element1.innerHTML = `<a href="#" onclick= "logout();" >Logout</a>`;
}
function logout() {
  var messageElement = document.getElementById("login");
  messageElement.innerHTML =`<li id="login"><a href="#" onclick= "visible();" >Login</a></li>`;
  localStorage.setItem("isLoggedIn", false);
 logoutbutton();
}
function logoutbutton(){
  var element1 = document.getElementById("logout");
  element1.innerHTML = ``;
}

function checkLoginStatus() {
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  var messageElement = document.getElementById("login");

  if (isLoggedIn === "true") {
    messageElement.innerHTML = "<a href='account-settings/index.html'>Account</a>";
    addlogout();
    notVisible();
  } else {
    messageElement.innerHTML = `<li id="login"><a href='#' onclick= "visible();" >Login</a></li>`;
  }
}
checkLoginStatus();