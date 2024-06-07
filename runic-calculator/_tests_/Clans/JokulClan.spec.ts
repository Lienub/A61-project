import { RuneList } from '../../src/Runes/RuneList';
import { Convert } from '../../src/commands/Convert';
import { Add } from '../../src/commands/Add';

describe('Jokul Clan Runic Calculations', () => {
    test('Convert | Jokul | Right to left : ᚱᚦᚨᚠᚠ = 28', () => {
        const runeList = new RuneList('none', 'ᚱᚦᚨᚠᚠ', new Convert());
        expect(runeList.result).toBe(28);
    });

    test('Convert | Jokul | Left to right : ᚠᚠᚨᚦᚱ = 28', () => {
        const runeList = new RuneList('none', 'ᚠᚠᚨᚦᚱ', new Convert());
        expect(runeList.result).toBe(28);
    });

    test('Addition | Jokul | Right to left : ᚱᚠᚠᚨᚦ.ᚱᚢᚢ = ᚱᚠᚠᚨᚢᚦᚢ', () => {
        const runeList = new RuneList('none', 'ᚱᚠᚠᚨᚦ.ᚱᚢᚢ', new Add());
        expect(runeList.result).toBe('ᚱᚠᚠᚨᚢᚦᚢ');
    });

    test('Addition | Jokul | Left to right : ᚠᚠᚨᚦᚱ.ᚢᚢᚱ = ᚢᚠᚢᚠᚨᚦᚱ', () => {
        const runeList = new RuneList('none', 'ᚠᚠᚨᚦᚱ.ᚢᚢᚱ', new Add());
        expect(runeList.result).toBe('ᚢᚠᚢᚠᚨᚦᚱ');
    });
});
