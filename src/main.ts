import './style.css'


let inputElement = document.getElementById('input') as HTMLInputElement;

let buttonElement = document.getElementById('button');
if (buttonElement) {
  buttonElement.addEventListener('click', () => {
    const string = inputElement.value;
    const result = revertString(string);
    const bonjourOrBonsoir = sayBonjourOrBonsoir();
    const isPalindrome = result == string; 
    console.log(`${bonjourOrBonsoir} Voici votre mot à l'envers : ${result} ! ${isPalindrome ? "Bien dit !" : null} `);
  });
}


//write a function that reverts a string
function revertString(string: string) {
  return string.split('').reverse().join('');
}

function sayBonjourOrBonsoir() {
  let date = new Date();
  date.getHours();
  if (date.getHours() < 12) {
    return 'Bonjour !';
  }
  else {
    return 'Bonsoir !';
  }
}

