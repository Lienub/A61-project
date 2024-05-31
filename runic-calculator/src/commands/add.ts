import { RunicCommand } from './interfaces/RunicCommand';
import { additionRunicNumbers } from '../services/runicAdd';
import { Logger } from '../utils/logger';

/**
 * 
 * Executes the addition of a list of runic numbers.
 * 
 * @param runicInput
 * @returns The sum of the runic numbers.
 * @throws Will log an error message if the input is invalid.
 */
export class AddCommand implements RunicCommand {
  execute(runicInput: string): string {
    const runicNumbers = runicInput.split('.');
    if (runicNumbers.length < 2) {
      Logger.error('Invalid input: At least two runic numbers are required.');
      return '';
    }
    
    return additionRunicNumbers(runicNumbers);
  }
}
