import { RuneList } from "./Runes/RuneList";
import { getOperation } from "./commands/_commandsFactory_";
import { getArchaeologist } from "./Archaeologist/_archaeologistFactory_";

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: runic-calculator <option> <command> <args>');
  console.error('\t\t\t- <command>: convert | add');
  console.error('\t\t\t- <option> (optional): --archaeologist=<name>');
  process.exit(1);
}

let runesList, runicInput, command = null;
let runicOption = "bjorn_straussler";
let archaeologist = getArchaeologist(runicOption);

switch (true) {
  case args.length === 2:
    command = getOperation(args[0], archaeologist);
    runicInput = args[1];
    runesList = new RuneList(runicInput, command, archaeologist);
    break;
  case args.length === 3:
    runicOption = args[0].split('=')[1];
    archaeologist = getArchaeologist(runicOption);
    command = getOperation(args[1], archaeologist);
    runicInput = args[2];
    runesList = new RuneList(runicInput, command, archaeologist);
    break;
  default:
    console.error('Usage: runic-calculator <option> <command> <args>');
    console.error('\t\t\t- <command>: convert | add');
    console.error('\t\t\t- <option> (optional): --archaeologist=<name>');
    process.exit(1);
}

console.log(runesList.result);