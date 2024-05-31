import { Convert } from '../src/commands/Convert';
import { Rune } from '../src/Runes/_rune';
import { Feoh, Gebo, Raidho, Thurisaz } from '../src/Runes/Rune';

describe('Convert Class', () => {
    let convert: Convert;

    beforeEach(() => {
        convert = new Convert();
    });

    describe('runeOperation method', () => {
        it('should add previous rune and other rune decimal value', () => {
            const previousRune = 5;
            const otherRune = new Feoh();
            const result = convert.runeOperation(previousRune, otherRune);
            expect(result).toBe(previousRune + otherRune.decimal);
        });
    });
});
