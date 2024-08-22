/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let buttonNumber = [];
let buttonOperator = '';
let buttonTotal = null;
let userNumber = '';

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');
const displayElement = document.querySelector('.display');
const numberElements = document.querySelectorAll('.number');

displayElement.innerText = 0;
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
      
  if ((event.target.classList.contains('number')) || (event.target.classList.contains('operator'))) { 
    
    if (event.target.classList.contains('number')) {
      
      userNumber = (userNumber + `${event.target.innerText}`);
      console.log(userNumber);
      displayElement.innerText = (userNumber);
    };
      
    if (event.target.classList.contains('operator')) {
       
      if (event.target.innerText !== 'C') {
       
        buttonNumber.push(Number(userNumber));
        console.log(buttonNumber);
        displayElement.innerText = (buttonNumber);
        userNumber = '';
        
        buttonOperator = event.target.innerText;
        console.log(buttonOperator);
        displayElement.innerText = (buttonOperator);
      }
   } 

  } else if (event.target.classList.contains('equals')) {

        addToButtonNumber(userNumber);
        console.log(buttonNumber);
        userNumber = '';
      
    if (buttonOperator === '+') {
       
      buttonTotal = buttonNumber.reduce((accumulator, currentValue) => 
        accumulator + currentValue);
      console.log(buttonTotal);
      displayElement.innerText = (buttonTotal);
        
    } else if (buttonOperator === '-') {
            
      buttonTotal = buttonNumber.reduce((accumulator, currentValue) => 
        accumulator - currentValue);
      console.log(buttonTotal);
      displayElement.innerText = (buttonTotal);

    } else if (buttonOperator === '*') {
          
      buttonTotal = buttonNumber.reduce((accumulator, currentValue) => 
        accumulator * currentValue);
      console.log(buttonTotal);
      displayElement.innerText = (buttonTotal);

    } else if (buttonOperator === '/') {
        
      buttonTotal = buttonNumber.reduce((accumulator, currentValue) => 
        accumulator / currentValue);
      console.log(buttonTotal);
      displayElement.innerText = (buttonTotal);
    }
  } 
     
    if (event.target.classList.contains('clear')) {

      buttonNumber = [];
      console.log(buttonNumber);
      buttonOperator = '';
      console.log(buttonOperator);
      buttonTotal = '';
      console.log(buttonTotal);
      userNumber = '';
      console.log(userNumber);

      displayElement.innerText = 0;
      console.log(displayElement);
    }
    })
    


 /*-------------------------------- Functions --------------------------------*/

 function addToButtonNumber(userNumber) {
    buttonNumber.push(Number(userNumber));
 }