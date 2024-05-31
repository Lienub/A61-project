import { convertRunicToDecimal } from '../services/runicConverter';
import { RunicCommand } from './interfaces/RunicCommand';
import { Logger } from "../utils/logger";

export class ConvertCommand implements RunicCommand {
  /**
   * 
   * Executes the conversion of a runic string input to a decimal number.
   * 
   * @param runicInput
   * @returns The decimal representation of the runic input. Returns -1 if an invalid runic character is found.
   * @throws Will log an error message if an invalid runic character is found in the input.
   */
  execute(runicInput: string): number {
    const decimalValue = convertRunicToDecimal(runicInput);
    if (decimalValue === -1) {
      Logger.error(`Runic character not found in input: ${runicInput}`);
    }
    return decimalValue;
  }
}
