
import { RunicSymbols, getRunicSymbolValue } from "../enums/runicSymbols";
import { Logger } from "../utils/logger";

/**
 * 
 * This function converts runic symbols in decimal number
 * 
 * @param runic 
 * @returns total of runic symbols
 */
export function convertRunicToDecimal(runic: string): number {
  if (runic.length === 1) {
    return 1;
  }

  const runes = runic.split('').reverse();
  let previousValue = 1;
  let total = previousValue;

  for (let i = 1; i < runes.length; i++) {
    let currentValue = 0;
    const symbol = runes[i] as RunicSymbols;
  
    if (!Object.values(RunicSymbols).includes(symbol)) {
      Logger.error(`Runic character not exists: ${symbol}`);
    }

    const valueOfRunic = getRunicSymbolValue(symbol);
  
    currentValue = calculateCurrentValue(symbol, previousValue, valueOfRunic);
    previousValue = currentValue;

    total += currentValue;
  }

  return total;
}

/**
 * 
 * This function allows to calculate previous value 
 * with value of runic symbol
 * 
 * @param symbol
 * @param previousValue 
 * @param valueOfRunic 
 * @returns result of previous value with value of runic
 */
function calculateCurrentValue(symbol: RunicSymbols, previousValue: number, valueOfRunic: number): number {
  if (symbol === RunicSymbols.THURISAZ) {
    return previousValue * valueOfRunic;
  } else {
    return previousValue + valueOfRunic;
  }
}
