import { RuneList } from "./Runes/RuneList";
import { getOperation } from "./commands/commandsFactory";

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: runic-calculator <command> <args>');
  console.error('\t\t\t- <command>: convert | add');
  process.exit(1);
}

const command = getOperation(args[0]);
const runicInput = args[1];

const runesList = new RuneList(runicInput, command);

console.log(runesList.result);