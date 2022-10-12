// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

const buyNow = () => { 
  var x = document.forms["myForm"]["inputName"].value;
  
  if (x == "") {
    alert("Kindly fill out your name");
    
  }
 
  else if (x.toUpperCase() === "YOUR NAME") {
    alert("Kindly enter your custom name");
  }

  else if ( x.length > 15 ){
    alert("We have 15 letters left in stock, and you have exceeded the limit");
  }
  
else if ( x !== "text_value") {
  alert("Entered a set of letters");
}
  
}




userInput.oninput = (e)=>{
  countLeters(e.target.value)
}


