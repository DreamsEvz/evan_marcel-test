import './style.css'
import readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Quel est votre mot ? ', (answer) => {
  const result = revertString(answer);
  const bonjourOrBonsoir = sayBonjourOrBonsoir();
  const isPalindrome = result == answer;
  console.log(`${bonjourOrBonsoir} Voici votre mot à l'envers : ${result} ! ${isPalindrome ? "Bien dit !" : null} `);
  rl.close();
});

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

