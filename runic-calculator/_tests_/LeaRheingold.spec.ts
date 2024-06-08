import { LeaRheingold } from '../src/Archaeologist/LeaRheingold';
import { RunicSymbols } from '../src/enums/RunicSymbols';

describe('Lea Rheingold Class', () => {
    test('should return decimal values for runic symbols', () => {
        const lea = new LeaRheingold('lea_rheingold');
        
        expect(lea.getDecimalRune(RunicSymbols.FEOH)).toBe(3);
        expect(lea.getDecimalRune(RunicSymbols.URUZ)).toBe(5);
        expect(lea.getDecimalRune(RunicSymbols.THURISAZ)).toBe(3);
        expect(lea.getDecimalRune(RunicSymbols.ANSUZ)).toBe(2);
        expect(lea.getDecimalRune(RunicSymbols.RAIDHO)).toBe(0);
        expect(lea.getDecimalRune(RunicSymbols.GEBO)).toBe(5);
        expect(lea.getDecimalRune('INVALID')).toBe(0);
    });
});