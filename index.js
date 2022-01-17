//defining screen variable using element id screen
let screen = document.getElementById('screen');
// defining buttons for .scifunc class
buttons = document.querySelectorAll('.scifunc');
let Result = '';
// factorial functions
function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }
//   looping through every buttons
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x'){
            buttonText = '*';
            Result += buttonText;
            screen.value = Result;
        }
        else if(buttonText == 'mod'){
            buttonText = '%';
            Result += buttonText;
            screen.value = Result;
        }
        else if(buttonText == '1/x'){
            buttonText = '1/';
            Result += buttonText;
            screen.value = Result;
        }
        else if(buttonText=='x2'){
            buttonText = '**2';
            Result += buttonText;
            screen.value = Result;
        }
        else if(buttonText=='10x'){
            buttonText = '10**';
            Result += buttonText;
            screen.value = Result;
        }
        else if(buttonText == 'xy'){
            buttonText = '**';
            Result += buttonText;
            screen.value = Result;
        }
        else if(buttonText=='MS'){
            ms = screen.value;
            Result = '';
            screen.value = Result;
            console.log(ms);
        }
        else if(buttonText=='M-'){
            ms = eval(ms) - eval(screen.value);
            screen.value = Result;
        }
        else if(buttonText=='M+'){
            ms =  eval(ms) + eval(screen.value);
            Result = '';
            screen.value = Result;
        }
        else if(buttonText=='MR'){
            Result = ms;
            screen.value = Result;
            console.log(Result);
        }
        else if(buttonText=='MC'){
            ms = 0;
        }
        else if (buttonText == 'log') {
            screen.value = Math.log10(Result);
            Result = screen.value;
        }
        else if(buttonText=='backspace'){
            screen.value = Result.slice(0,-1);
            Result = screen.value;
        }
        else if (buttonText == 'n!') {
            screen.value = factorial(screen.value) ;
            Result = screen.value;
        }
        else if (buttonText == 'C'){
            Result = "";
            screen.value = Result;
        }
        else if (buttonText == '='){
            screen.value = eval(Result);
            Result = screen.value;
            Result='';
        }      
        else {
            Result += buttonText;
            screen.value = Result;
        }
    })
}