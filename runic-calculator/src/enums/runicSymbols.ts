export enum RunicSymbols {
    FEOH = 'ᚠ',
    URUZ = 'ᚢ',
    THURISAZ = 'ᚦ',
    ANSUZ = 'ᚨ'
}

/**
 * 
 * This function gives decimal of the current symbol
 * 
 * @param symbol 
 * @returns decimal of the current symbol, otherwise 0.
 */
export function getRunicSymbolValue(symbol: RunicSymbols): number {
    switch (symbol) {
        case RunicSymbols.FEOH:
            return 5;
        case RunicSymbols.URUZ:
            return 3;
        case RunicSymbols.THURISAZ:
            return 2;
        case RunicSymbols.ANSUZ:
            return 1;
        default:
            return 0;
    }
}