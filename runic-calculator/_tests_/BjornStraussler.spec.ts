import { BjornStraussler } from '../src/Archaeologist/Archaeologist';
import { RunicSymbols } from '../src/enums/RunicSymbols';

describe('Bjorn Straussler Class', () => {
    test('should return decimal values for runic symbols', () => {
        const bjorn = new BjornStraussler('option');
        
        expect(bjorn.getDecimalRune(RunicSymbols.FEOH)).toBe(5);
        expect(bjorn.getDecimalRune(RunicSymbols.URUZ)).toBe(3);
        expect(bjorn.getDecimalRune(RunicSymbols.THURISAZ)).toBe(2);
        expect(bjorn.getDecimalRune(RunicSymbols.ANSUZ)).toBe(1);
        expect(bjorn.getDecimalRune(RunicSymbols.RAIDHO)).toBe(0);
        expect(bjorn.getDecimalRune(RunicSymbols.GEBO)).toBe(0);
        expect(bjorn.getDecimalRune('INVALID')).toBe(0);
    });
});