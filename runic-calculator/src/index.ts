import { RuneList } from "./Runes/RuneList";
import { getOperation } from "./commands/commandsFactory";

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: runic-calculator <command> <args>');
  console.error('\t\t\t- <command>: convert | add');
  process.exit(1);
}

let runesList, runicInput, command = null;
let runicOption = "none";

switch (true) {
  case args.length === 2:
    command = getOperation(args[0]);
    runicInput = args[1];
    runesList = new RuneList(runicOption, runicInput, command);
    break;
  case args.length === 3:
    command = getOperation(args[1]);
    runicOption = args[0];
    runicInput = args[2];
    runesList = new RuneList(runicOption, runicInput, command);
    break;
  default:
    process.exit(1);
}

console.log(runesList.result);