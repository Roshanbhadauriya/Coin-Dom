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