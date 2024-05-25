import { RunicCommand } from './interfaces/RunicCommand';
import { ConvertCommand } from './convertCommand';

export class RunicCommandFactory {
  /**
   * 
   * Returns an instance of a RunicCommand based on the given command string.
   * 
   * @param command - convert or add
   * @returns An instance of RunicCommand if the command is recognized, otherwise null.
   */
  getCommand(command: string): RunicCommand | null {
    switch (command) {
      case 'convert':
        return new ConvertCommand();
      case 'add':
        // TODO: Implements Add Command
        return null
      default:
        return null;
    }
  }
}
