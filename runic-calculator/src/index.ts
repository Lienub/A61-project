import { RunicCommandFactory } from "./commands/runicCommandFactory";

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: runic-calculator <command> <args>');
  console.error('\t\t\t- <command>: convert | add');
  process.exit(1);
}

const command = args[0];
const runicInput = args[1];

const commandFactory = new RunicCommandFactory();
const runicCommand = commandFactory.getCommand(command);

const result = runicCommand?.execute(runicInput);

if (result !== undefined) {
  console.log(result);
}