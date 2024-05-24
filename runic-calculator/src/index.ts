function convertRunicToDecimal(runic: string): number {
  if (runic.length === 1) {
    return 1;
  }

  const runes = runic.split('').reverse();
  let previousValue = 1;
  let total = previousValue;

  for (let i = 1; i < runes.length; i++) {
    let currentValue = 0;
    switch (runes[i]) {
      case 'ᚠ':
        currentValue = previousValue + 5;
        break;
      case 'ᚢ':
        currentValue = previousValue + 3;
        break;
      case 'ᚦ':
        currentValue = previousValue * 2;
        break;
      case 'ᚨ':
        currentValue = previousValue + 1;
        break;
      default:
        console.error(`Runic character not found: ${runes[i]}`);
        return -1;
    }
    previousValue = currentValue;
    total += currentValue;
  }

  return total;
}

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: runic-calculator <command> <args>');
  console.error('\t\t\t- <command>: convert | add');
  process.exit(1);
}

const command = args[0];
const runicInput = args[1];

if (command === 'convert') {
  const decimalValue = convertRunicToDecimal(runicInput);
  if(decimalValue === -1) {
    process.exit(1);
  }
  console.log(decimalValue);
} else if (command === 'add') {
  // TODO
} else {
  console.error(`Ah shit, here we go again.. : Command Not Found: ${command}`);
  process.exit(1);
}
