import { RuneList } from "./class/Runes/RuneList";
import { getOperation } from "./class/RunicOperation/RunicOperation";
import { RunicCommandFactory } from "./commands/runicCommandFactory";

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

// const commandFactory = new RunicCommandFactory();
// const runicCommand = commandFactory.getCommand(command);

// const result = runicCommand?.execute(runicInput);

// if (result !== undefined) {
//   console.log(result);
// }

